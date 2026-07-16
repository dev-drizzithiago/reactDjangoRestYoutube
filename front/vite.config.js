import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
// import babel from '@rolldown/plugin-babel';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    port: 80, // aqui você escolhe a porta
    host: true  // opcional, para acessar pela rede
  }
})
