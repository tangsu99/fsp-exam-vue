import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Guarantee from '../views/Guarantee.vue'
import PrepareForTheExam from '../views/PrepareForTheExam.vue'
import Examination from '../views/Examination.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/guarantee',
      name: 'Guarantee',
      component: Guarantee
    },
    {
      path: '/prepareForTheExam',
      name: 'PrepareForTheExam',
      component: PrepareForTheExam
    },
    {
      path: '/examination',
      name: 'Examination',
      component: Examination
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
