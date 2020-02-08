import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import VueToastify from 'vue-toastify'
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import {Datetime} from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import router from './router';
import store from './store/index';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Datetime);
Vue.use(VueToastify, {
    position: "bottom-left",
    theme: "light",
    hideProgressbar: true,
    iconEnabled: false,
    singular: true
});

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');
