// import './assets/main.css'
import './assets/styles/globalMixins.scss' // 引入全局样式

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import axios from '../src/api/config/base'
import '../src/api/mock/'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.config.globalProperties.$axios = axios;
app.provide('$axios', axios);

app.mount('#app')
