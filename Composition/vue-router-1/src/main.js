import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import { aliases, fa } from 'vuetify/iconsets/fa';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Opcional: Configuración de iconos FontAwesome
const vuetify = createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
  components,
  directives,
});

const app = createApp(App);
app.use(router);
app.use(vuetify);

app.mount('#app');
