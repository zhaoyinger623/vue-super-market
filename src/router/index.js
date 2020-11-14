import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/Home/home')
const Cart = () => import('@/views/Cart/cart')
const Category = () => import('@/views/Category/category')
const Profile = () => import('@/views/Profile/profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router