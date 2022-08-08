import { createApp } from 'vue'
import vant from 'vant'
import App from './App.vue'
const app = createApp(App);
import "normalize.css"
import 'vant/lib/index.css';
import "./assets/style/global.less";
import router from './router'
import store from "@/store/index";
app.use(store);
app.use(router)
app.use(vant);
app.mount('#app')
