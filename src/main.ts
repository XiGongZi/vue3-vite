import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './utils/router';
import store from './utils/store';
import { AppGlobalConfig } from './config/app';


import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


const app: ReturnType<typeof createApp> = createApp(App)
// 向通用属性注入到全局实例
app.config.globalProperties = AppGlobalConfig;



app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')