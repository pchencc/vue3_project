
import vue from '@vitejs/plugin-vue'
// 引入resolve

import path from 'path'

//引入svg
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

//mock
import { UserConfigExport, ConfigEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'



 
// 文档: https://vitejs.dev/config/ 
export default ({ command }:ConfigEnv):UserConfigExport=>{
 return{
  plugins: [
    vue(),

    //mock
    viteMockServe({
  
      enable: command === 'serve',
    }),

    //svg
    createSvgIconsPlugin({ 
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
  
  ],

  
 
  resolve: {
    alias: {
        "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
    }
},
//scss全局变量配置
css: {
  preprocessorOptions: {
    scss: {
      javascriptEnabled: true,
      additionalData: '@import "./src/styles/variable.scss";',
    },
  },
}
 }
}