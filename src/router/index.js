import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import JobView from '@/views/JobView.vue';
import ReviewsView from '@/views/ReviewsView.vue';
import ProductsView from '@/views/ProductsView.vue';
import ResearchView from '@/views/ResearchView.vue';

const defaultTitle = "Ланвер";

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
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { title: defaultTitle + " - о компании" }
    },

    {
      path: '/job',
      name: 'job',
      component: JobView,
      meta: { title: defaultTitle + " - вакансии" }
    },

    {
      path: '/reviews',
      name: 'reviews',
      component: ReviewsView,
      meta: { title: defaultTitle + " - отзывы" }
    },

    {
      path: '/products',
      name: 'products',
      component: ProductsView,
      meta: { title: defaultTitle + " - продукты" }
    },

    {
      path: '/research',
      name: 'research',
      component: ResearchView,
      meta: { title: defaultTitle + " - результаты поиска" }
    }
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || defaultTitle;
  next();
});

export default router
