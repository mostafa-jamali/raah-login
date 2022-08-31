import Vue from 'vue';

import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './Router/router.js';
import './styles/app.scss';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App),
  router,
}).$mount('#app');
