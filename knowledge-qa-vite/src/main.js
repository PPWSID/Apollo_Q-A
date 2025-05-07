import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import axios from 'axios';
import VueAxios from 'vue-axios';

import 'vuetify/styles' // ✅ CSS หลัก
import '@mdi/font/css/materialdesignicons.css' // ✅ icon (ถ้าใช้)
import vuetify from './plugins/vuetify' // ✅ export จาก createVuetify()

const app = createApp(App)
const pinia = createPinia();

app.use(VueAxios, axios);
app.use(pinia);
app.use(router);
app.use(vuetify);

app.mount('#app')
