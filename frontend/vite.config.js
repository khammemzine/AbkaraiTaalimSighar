import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1', // استخدام IPv4 بدل ::1
    port: 3000,         // أو أي منفذ آخر (مثل 5174)
    strictPort: true    // لمنع تغيير المنفذ تلقائيًا
  }
})
