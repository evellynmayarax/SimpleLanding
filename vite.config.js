import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

// Qual cliente chamar:  VITE_CLIENT=dr-paulo npm run build
export default defineConfig(({ mode }) => {
  const env = { ...loadEnv(mode, process.cwd(), ''), ...process.env }
  const id = env.VITE_CLIENT || 'ana-souza'
  const clientFile = path.resolve(`./src/clients/${id}.json`)

  if (!fs.existsSync(clientFile)) {
    throw new Error(`Client "${id}" not found in src/clients/`)
  }
  const client = JSON.parse(fs.readFileSync(clientFile, 'utf-8'))

  return {
    plugins: [
      react(),
      {
        name: 'client-seo',
        transformIndexHtml: (html) =>
          html
            .replaceAll('{{TITLE}}', client.seo.title)
            .replaceAll('{{DESCRIPTION}}', client.seo.description)
            .replaceAll('{{THEME}}', client.colors.brand),
      },
    ],
    resolve: { alias: { '@client': clientFile } },
    publicDir: path.resolve(`./public/${id}`),
    base: './',
    build: { outDir: `dist/${id}` },
  }
})