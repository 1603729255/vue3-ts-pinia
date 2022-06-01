import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);
import "./assets/style/global.less";
import router from './router'
import store from "@/store/index";
app.use(store);
app.use(router)
createApp(App).mount('#app')
