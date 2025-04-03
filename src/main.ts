import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//暗黑模式需要的样式
import 'element-plus/theme-chalk/dark/css-vars.css'
//svg
import 'virtual:svg-icons-register'
//引入自定义插件对象：注册整个项目全局组件
import gloablComponent from './components/index'
import '@/styles/index.scss'
import router from './router'
import pinia from './store'

createApp(App)
  .use(gloablComponent)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .use(pinia)
  .use(router)
  .mount('#app')
