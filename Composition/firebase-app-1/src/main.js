import { createApp } from 'vue'
import vuetify from './plugins/vuefity';
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App);
app.use(router)
app.use(createPinia())
app.use(vuetify)

app.mount('#app')
