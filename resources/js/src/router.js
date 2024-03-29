import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthRequire from './util/AuthRequire';

Vue.use(VueRouter);

const routes = [
  {
    path: '/painel',
    component: () => import(/* webpackChunkName: "painel" */ './views/Painel'),
    redirect: '/painel/home',
    beforeEnter: AuthRequire,
    children: [
      { path: 'home', component: () => import(/* webpackChunkName: "painel-home" */ './views/Painel/Home.vue'), },
      { path: 'raffle', component: () => import(/* webpackChunkName: "painel-draw" */ './views/Painel/Raffle/list.vue'), },
      { path: 'payment', component: () => import(/* webpackChunkName: "painel-payment" */ './views/Painel/Payment/list.vue'), },
      { path: 'contact', component: () => import(/* webpackChunkName: "painel-contact" */ './views/Painel/Contact/list.vue'), },
    ]
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "app" */ './views'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import(/* webpackChunkName: "Home" */'./views/Home.vue')
      },
      {
        path: 'draw',
        redirect: 'draw/list',
        component: () => import(/* webpackChunkName: "draw" */ './views/Draw'),
        children: [
          { path: 'list', component: () => import(/* webpackChunkName: "Draw-list" */ './views/Draw/Draw.vue') },
          { path: 'show/:id', component: () => import(/* webpackChunkName: "Draw-lshow" */'./views/Draw/Draw-show.vue'), }
        ]
      },
      {
        path: 'payment',
        component: () => import(/* webpackChunkName: "Payment" */'./views/Payment.vue')
      },
      {
        path: 'contact',
        component: () => import(/* webpackChunkName: "Contact" */'./views/Contact.vue')
      }
    ],
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */'./views/Login')
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "Erro" */'./views/Erro')
  },
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history"
});

export default router;