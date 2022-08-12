import { createApp } from 'vue'
//import App from './App.vue'
import App from './components/02Router/App.vue'
import Test from "./components/Test.vue";
import './index.css'
import router from "./components/02Router/router";

const app = createApp(App)

// 挂载路由模块
app.use(router)
app.component('test', Test)

app.mount('#app')
