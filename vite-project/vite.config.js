import { defineConfig } from 'vite'

export default defineConfig({
  // Základní konfigurace
  root: '.',
  publicDir: 'public',
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: false // Vypne překrytí chyb v prohlížeči
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
