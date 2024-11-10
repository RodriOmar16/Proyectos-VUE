import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios';
import VueAxios from 'vue-axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

axios.defaults.baseURL = 'http://localhost:80/vue-wordpress/wp-json/';

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

console.log("vue montado correctamente")
