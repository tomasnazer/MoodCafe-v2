import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoffMenuView from '../views/CoffMenuView.vue'
import DrinksMenuView from '../views/DrinksMenuView.vue'
import FoodMenuView from '../views/FoodMenuView.vue'


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
    path: '/coffemenu',
    name: 'Coffe',
    component: CoffMenuView
  },
  {
    path: '/drinksmenu',
    name: 'Drinks',
    component: DrinksMenuView
  },
  {
    path: '/foodmenu',
    name: 'Food',
    component: FoodMenuView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
