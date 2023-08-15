import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'TYPES': fileURLToPath(new URL('./src/types', import.meta.url)),
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        // additionalData 是一个配置选项，它可以让你在每个 scss 文件或 style 标签之前添加一些额外的数据，比如全局变量或样式
        // 如果注入的是实际的样式而不仅仅是变量时，那么这些样式将会在最终的打包产物中重复出现。(慎用全局样式)
        additionalData: `@import "./src/assets/styles/globalVar.scss";`
      }
    },
    devSourcemap: true, // 在开发过程中启用 sourcemap, 如果是通过 additionalData 添加，只会定位到引入的 style 标签位置。
  }
})
