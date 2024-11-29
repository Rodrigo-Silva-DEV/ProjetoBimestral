import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/FelipySouza',
    name: 'FelipySouza',

    component: () => import(/* webpackChunkName: "about" */ '../views/SobreNos/FelipySouza.vue')
  },
  {
    path: '/JoaoPedro',
    name: 'JoaoPedro',

    component: () => import(/* webpackChunkName: "about" */ '../views/SobreNos/JoaoPedro.vue')
  },
  {
    path: '/RodrigoSilva',
    name: 'RodrigoSilva',

    component: () => import(/* webpackChunkName: "about" */ '../views/SobreNos/RodrigoSilva.vue')
  },
  {
    path: '/RodrigoSouza',
    name: 'RodrigoSouza',

    component: () => import(/* webpackChunkName: "about" */ '../views/SobreNos/RodrigoSouza.vue')
  },
  {
    path: '/ComprarProduto',
    name: 'ComprarProduto',

    component: () => import(/* webpackChunkName: "about" */ '../views/ComprarProduto.vue')
  },
  {
    path: '/Administrar',
    name: 'Administrar',

    component: () => import(/* webpackChunkName: "about" */ '../views/Administrar.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
