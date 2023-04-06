import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

const resolve = (...filepath: string[]) => path.join(fileURLToPath(new URL('./src', import.meta.url)), ...filepath)

export default defineConfig({
  build: {
    lib: {
      entry: resolve('index.tsx'),
      name: 'bundle',
      formats: ['cjs'],
      fileName: 'index',
    },
  },
  plugins: [react(), dts({ entryRoot: resolve() })],
})
