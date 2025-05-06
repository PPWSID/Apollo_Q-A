import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HelloWorld.vue'
import QuestionCard from '../views/QustionPage.vue'
const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home 
 },
 {
    path : '/qa',
    name : 'QA',
    component : QuestionCard
 },
 {
  path : '/login',
  name : 'Loging in',
  component : () => import('../views/Login.vue')
 },
 {
  path : '/register',
  name : 'Register',
  component : () => import('../views/Register.vue')
 },
 {
  path : '/dashboard',
  name : 'Self Dashboard',
  component : () => import('../views/SelfDashboard.vue')
 }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
