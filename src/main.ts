import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'

//svg
import 'virtual:svg-icons-register'

// element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

// 获取应用实例对象
const app = createApp(App)
// 安装插件
app.use(ElementPlus)


//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
app.use(ElementPlus, {
    locale: zhCn
})

//svg
import gloablComponent from './components/index';
app.use(gloablComponent);

//scss
import '@/styles/index.scss'


// 将应用挂载在挂载点上
app.mount('#app')
