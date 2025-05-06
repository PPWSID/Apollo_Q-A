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
 }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
