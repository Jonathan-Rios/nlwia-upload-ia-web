import { FileVideo, Upload } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "@radix-ui/react-separator";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { ChangeEvent, FormEvent, useMemo, useRef, useState } from "react";
import { getFFmpeg } from "@/lib/ffmpeg";
import { fetchFile } from "@ffmpeg/util";
import { api } from "@/lib/axios";

type Status = "waiting" | "converting" | "uploading" | "generating" | "success";

const statusMessage = {
  converting: "Convertendo...",
  generating: "Transcrevendo...",
  uploading: "Carregando...",
  success: "Sucesso!",
};

interface VideoInputFormProps {
  onVideoUploaded: (videoId: string) => void;
}

export function VideoInputForm({ onVideoUploaded }: VideoInputFormProps) {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [status, setStatus] = useState<Status>("waiting");

  const promptInputRef = useRef<HTMLTextAreaElement>(null);

  function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.currentTarget;

    if (!files) {
      return;
    }

    const selectedFile = files[0]; // ?  Files sempre será um array, mesmo que tenha apenas um arquivo selecionado
    setVideoFile(selectedFile);
  }

  async function convertVideoToAudio(video: File) {
    console.log(`[Convert Started]`);
    try {
      const ffmpeg = await getFFmpeg();

      await ffmpeg.writeFile("input.mp4", await fetchFile(video));

      /* ? Forma de debugar o ffmpeg
      ffmpeg.on("log", (log) => {
        console.log(log.message);
      }); */

      ffmpeg.on("progress", (progress) => {
        console.log(
          `-[Convert progress]: ${Math.round(progress.progress * 100)}%}`
        );
      });

      await ffmpeg.exec([
        "-i",
        "input.mp4",
        "-map",
        "0:a?",
        "-b:a",
        "20k",
        "-acodec",
        "libmp3lame",
        "output.mp3",
      ]);

      const data = await ffmpeg.readFile("output.mp3");

      const audioFileBlob = new Blob([data], { type: "audio/mpeg" });
      const audioFile = new File([audioFileBlob], "audio.mp3", {
        type: "audio/mpeg",
      });

      console.log(`-[Convert Finished]`);

      return audioFile;
    } catch (error) {
      throw error;
    }
  }

  async function handleUploadVideo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const prompt = promptInputRef.current?.value;

    if (!videoFile) {
      return;
    }

    setStatus("converting");

    const audioFile = await convertVideoToAudio(videoFile);

    const data = new FormData();

    data.append("file", audioFile);

    setStatus("uploading");

    const response = await api.post("/videos", data);

    const videoId = response.data.video.id;

    setStatus("generating");

    await api.post(`/videos/${videoId}/transcription`, {
      prompt,
    });

    setStatus("success");

    onVideoUploaded(videoId);
  }

  // ? Utilizamos o useMemo para evitar que TODA vez que renderizado precise gerar esse previewUrl
  const previewUrl = useMemo(() => {
    if (!videoFile) {
      return null;
    }

    return URL.createObjectURL(videoFile);
  }, [videoFile]);

  return (
    <form className="space-y-6" onSubmit={handleUploadVideo}>
      <label
        className="relative flex flex-col items-center justify-center gap-2 text-sm border rounded-md cursor-pointer aspect-video text-muted-foreground hover:bg-primary/5"
        htmlFor="video"
      >
        {previewUrl ? (
          <video
            className="absolute inset-0 max-h-full m-auto rounded-md pointer-events-none"
            src={previewUrl}
            controls={false}
          />
        ) : (
          <>
            <FileVideo className="w-4 h-4" />
            Selecione um vídeo
          </>
        )}
      </label>
      <input
        type="file"
        id="video"
        accept="video/mp4"
        className="sr-only"
        onChange={handleFileSelected}
      />

      <Separator />

      <div className="space-y-2">
        <Label htmlFor="transcription_prompt">Prompt de transcrição</Label>
        <Textarea
          ref={promptInputRef}
          disabled={status !== "waiting"}
          id="transcription_prompt"
          className="h-20 leading-relaxed resize-none"
          placeholder="Inclua palavras-chaves mencionadas no vídeo separadas por vírgula (,)"
        />
      </div>

      <Button
        data-success={status === "success"}
        type="submit"
        disabled={status !== "waiting"}
        className="w-full data-[success=true]:bg-white"
      >
        {status === "waiting" ? (
          <>
            Carregar vídeo
            <Upload className="w-4 h-4 ml-2" />
          </>
        ) : (
          statusMessage[status]
        )}
      </Button>
    </form>
  );
}
