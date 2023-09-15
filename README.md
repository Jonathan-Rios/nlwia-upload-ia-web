<h1 align="center">NLW IA - WEB</h1>

<p align="center">
  <img 
    src="https://img.shields.io/badge/React-%5E18.2.15-blue" 
    alt="React Ver. ^18.2.15"
  />
  <img 
    src="https://img.shields.io/badge/Typescript-%5E5.0.2-blue"
    alt="Typescript Ver. 5.0.2" 
  />
  <img
    src="https://img.shields.io/badge/NLWIA-2023-green" 
    alt="NLWIA-2023"
  />
  <img 
    alt="License"
    src="https://img.shields.io/static/v1?label=license&message=MIT&color=E51C44&labelColor=0A1033"
  />
</p>

<div align="center">

  ![Last commit](https://img.shields.io/github/last-commit/Jonathan-Rios/nlwia-upload-ia-web?color=4DA1CD 'Last commit') &nbsp;
  ![Repo size](https://img.shields.io/github/repo-size/Jonathan-Rios/nlwia-upload-ia-web?color=4DA1CD 'Repo size') &nbsp;
  ![Languages](https://img.shields.io/github/languages/count/Jonathan-Rios/nlwia-upload-ia-web?color=4DA1CD 'Languages') &nbsp;
  
</div>

<br>

<h3 align="center">Imagem prévia da aplicação</h3>
 
<div align="center">
  <img src=".github/project-preview.gif?style=flat" alt="Cover" />
</div>

<br>

## 💻 Projeto
Essa aplicação foi desenvolvida para estudos seguindo os ensinamentos da **[Rocketseat](https://www.rocketseat.com.br/)** na semana NLWIA.

Aplicação para auxiliar na criação de títulos, descrições de vídeos (ou o que quiser configurar) usando IA do ChatGPT, basta fazer o upload que ela obtém o audio e te retorna opções para você escolher.

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Shadcn](https://ui.shadcn.com/)
- [Tailwind](https://tailwindcss.com/)
- [OpenAI-Api](https://openai.com/)
- [FFmpeg.wasm (WebAssembly)](https://github.com/ffmpegwasm/ffmpeg.wasm)


## 🚀 Como executar
Esse projeto precisa da api para funcionar, que é encontrada nesse [repositório](https://github.com/Jonathan-Rios/nlwia-upload-ia-api.git).

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/Jonathan-Rios/nlwia-upload-ia-web.git

$ cd nlwia-upload-ia-web
```

Para iniciá-lo, siga os passos abaixo:
```bash
# Instalar as dependências
$ npm install

# Iniciar o projeto
$ npm run dev
```
- Aparecerá no terminal o link de acesso da aplicação, geralmente na porta http://localhost:5173/.

## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE.md) para mais detalhes.

<br />


## 📓 Anotações pessoais

<h3>Criando o projeto e suas dependências </h3>

```bash
  # Criando o projeto com NextJS
  ➜ npm create vite
    ✔ Project name: … upload-ia-web
    ✔ Select a framework: › React
    ✔ Select a variant: › TypeScript

  #Instalando configs para o shadcn: https://ui.shadcn.com/docs/installation/vite
  ➜ npm install -D tailwindcss postcss autoprefixer
  ➜ npx tailwindcss init -p
  ➜ npm i -D @types/node
  ➜ npx shadcn-ui@latest init
      ✔ Would you like to use TypeScript (recommended)? … no / yes
      ✔ Which style would you like to use? › New York
      ✔ Which color would you like to use as base color? › Slate
      ✔ Where is your global CSS file? … src/index.css
      ✔ Would you like to use CSS variables for colors? … no / yes
      ✔ Where is your tailwind.config.js located? … tailwind.config.js
      ✔ Configure the import alias for components: … @/components
      ✔ Configure the import alias for utils: … @/lib/utils
      ✔ Are you using React Server Components? … no / yes
      ✔ Write configuration to components.json. Proceed? … yes
      
  ➜ npx shadcn-ui@latest add button
  ➜ npx shadcn-ui@latest add separator
  ➜ npx shadcn-ui@latest add textarea
  ➜ npx shadcn-ui@latest add label
  ➜ npx shadcn-ui@latest add select
  ➜ npx shadcn-ui@latest add slider
  
  ➜ npm i lucide-react

  # https://github.com/ffmpegwasm/ffmpeg.wasm
  ➜ npm install @ffmpeg/ffmpeg @ffmpeg/util
  
  ➜ npm install axios

  # Para usar o stream (recebendo o texto pouco a pouco igual no Chat GPT, tem que configurar na api e front)
  ➜ npm install ia
```   
<br />
 

---
<br />

<a href="https://github.com/Jonathan-Rios">
 <img src="https://github.com/Jonathan-Rios.png" width="100px;" alt="" />
 <br />
 <sub><b>Jonathan Rios Sousa</b></sub></a>

💠 NeverStopLearning 💠

[![Linkedin Badge](https://img.shields.io/badge/-Jonathan-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jonathan-rios-sousa-19b3431b6/)](https://www.linkedin.com/in/jonathan-rios-sousa-19b3431b6/) 
[![Gmail Badge](https://img.shields.io/badge/-jonathan.riosousa@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jonathan.riosousa@gmail.com)](mailto:jonathan.riosousa@gmail.com)