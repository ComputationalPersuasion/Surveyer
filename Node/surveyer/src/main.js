import Vue from 'vue';
import 'quasar-framework/dist/quasar.ios.css';
import 'quasar-extras/material-icons';
import Quasar from 'quasar-framework';
import Vuelidate from 'vuelidate';
import App from './App';
import ChatExpe from './ChatExpe';
import store from './store';

Vue.use(Quasar);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

const chatexpe = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => (chatexpe ? h(ChatExpe) : h(App)),
});
