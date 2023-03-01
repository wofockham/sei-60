import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

import 'semantic-ui-css/semantic.css';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
