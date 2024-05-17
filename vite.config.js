import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@mediapipe/tasks-vision', '@chevrotain/gast', '@chevrotain/cst-dts-gen', '@chevrotain/utils'],
      output: {
        manualChunks: {
          'my-chunk': ['src/main.jsx', 'src/index.css', 'src/pages/Customizer.jsx', 'src/pages/Home.jsx', 'src/components/AIPicker.jsx', 
          'src/components/ColorPicker.jsx', 'src/components/FilePicker.jsx' ],
          // Add more chunks as needed
        },
      },
    },
    chunkSizeWarningLimit: 600, // size in KB
  },
})
