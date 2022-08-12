import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';

import './index.css'
import './assets/css/bootstrap.css'

const app = createApp(App)

axios.defaults.baseURL = 'https://www.escook.cn'
app.config.globalProperties.$http = axios

app.mount('#app')
