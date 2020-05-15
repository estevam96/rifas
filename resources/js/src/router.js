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
              redirect: 'draw/list',
              component: () => import(/* webpackChunkName: "draw" */'./views/Draw'),
              children: [
                { path: 'list', component: () => import('./views/Draw/Draw.vue') },
                { path: 'show/:id', component: () => import('./views/Draw/Draw-show.vue'), }
              ]
            },
            {
              path: 'payment',
              component: () => import('./views/Payment.vue')
            },
            {
              path: 'contact',
              component: () => import('./views/Contact.vue')
            }
        ],
      },
      {
        path: '/login',
        component: () => import(/* webpackChunkName: "login" */'./views/Login')
      },
];

const router = new VueRouter({
    linkActiveClass: "active",
    routes,
    mode: "history"
});

export default router;