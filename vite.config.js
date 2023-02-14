import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'./',
  build: {
    chunkSizeWarningLimit:1500,
    rollupOptions: {
        output:{
            manualChunks(id) {
              if (id.includes('node_modules')) {
                
                  return id.toString().split('node_modules/')[1].split('/')[0].toString();
              }
          }
        }
    }
  },
  server: {
    hmr: true,
    port: 3001,
    proxy: {
      '/api': {
        target: "http://localhost:8081/", // 目标代理接口地址
        secure: false,
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        pathRewrite: {
          '^/api': '/api',
        },
      },
    },
  },
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
