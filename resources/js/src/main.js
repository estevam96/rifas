import Vue from 'vue';
import App from './App.vue';

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import router from './router';
import store from './store';

import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'

import vuePerfectScrollbar from 'vue-perfect-scrollbar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab, } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon }from '@fortawesome/vue-fontawesome';

library.add( fab, fas);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-perfect-scrollbar', vuePerfectScrollbar);
Vue.use(VueGlide)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


export default new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')