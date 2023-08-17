import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  server: {
    // host: '192.168.1.3',      // 在家网络
    host: '192.168.2.69',     // 公司网络
    port: 808, //未占用端口
    proxy: {
      '/api': {
        target: "http://localhost:7001", // 所要代理的目标地址
        changeOrigin: true,  //允许跨域
        ws: true,  // 开启 websockets 代理
        secure: false, // 验证 SSL 证书
        rewrite: (path) => path.replace(/^\/api/, ""),  // 重写传过来的path路径
      }
    }
  },
})
