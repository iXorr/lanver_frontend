import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TechView from '@/views/TechView.vue'
import CodexView from '@/views/CodexView.vue'

const defaultTitle = "Ланвер"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: defaultTitle + " - главная" }
    },

    {
      path: '/tech-expert',
      name: 'tech-expert',
      component: TechView,
      meta: { title: defaultTitle + " - тех. эксперт" }
    },

    {
      path: '/codex',
      name: 'codex',
      component: CodexView,
      meta: { title: defaultTitle + " - кодекс" }
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || defaultTitle;
  next();
})

export default router
