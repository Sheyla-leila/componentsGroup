import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.ts'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/common.css'
import '@/assets/css/classStyle.css'


const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')