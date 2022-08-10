import { createApp } from 'vue'
//import App from './App.vue'
import App from './components/MyHeader/App.vue'
import Test from "./components/Test.vue";
// import './index.css'

const app = createApp(App)

app.component('test', Test)

app.mount('#app')
