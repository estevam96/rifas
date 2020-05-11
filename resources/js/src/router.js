import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "app" */ './views'),
        redirect: '/home',
        children: [
            {
              path: 'home',
              component: () => import('./views/Home.vue')
            },
            {
              path: 'draw',
              component: () => import('./views/Draw.vue')
            },
            {
              path: 'payment',
              component: () => import('./views/Payment.vue')
            }
        ]
    }
];

const router = new VueRouter({
    linkActiveClass: "active",
    routes,
    mode: "history"
});

export default router;