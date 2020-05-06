import Vue from 'vue';
import App from './App.vue';

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import router from './router';

import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'

Vue.use(VueGlide)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


export default new Vue({
    router,
    render: h => h(App)
}).$mount('#app')