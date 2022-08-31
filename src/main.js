import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './Router/router.js';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App),
  router,
}).$mount('#app');
