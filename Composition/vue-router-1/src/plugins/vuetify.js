import '@fortawesome/fontawesome-free/css/all.css'; // Importa el CSS de FontAwesome
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import { aliases, fa } from 'vuetify/iconsets/fa';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'fa', // Usa FontAwesome como conjunto predeterminado
    aliases,
    sets: {
      fa,
    },
  },
});

export default vuetify;