import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',  // IPv4 لتفادي خطأ ::1
    port: 3000,         // أو 5173، حسب رغبتك
    strictPort: true    // يمنع تغيير المنفذ تلقائيًا
  }
})
