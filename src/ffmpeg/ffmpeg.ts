import { FFmpeg } from "@ffmpeg/ffmpeg";

// ? Utilizando "?url" faz com que o arquivo seja carregado assincronamente, ou seja, só será carregado quando for necessário.
import coreURL from "./ffmpeg/ffmpeg-core.js?url";
import wasmURL from "./ffmpeg/ffmpeg-core.wasm?url";
import workerURL from "./ffmpeg/ffmpeg-worker.js?url";

let ffmpeg: FFmpeg | null;

// ? Essa estrutura é para garantir que o ffmpeg seja carregado apenas uma vez, por ser pesado.
export async function getFFmpeg() {
  // ? Se existir reaproveita
  if (ffmpeg) {
    return ffmpeg;
  }

  ffmpeg = new FFmpeg();

  // ? Se não existir, carrega
  if (!ffmpeg.loaded) {
    await ffmpeg.load({
      coreURL,
      wasmURL,
      workerURL,
    });
  }

  return ffmpeg;
}
