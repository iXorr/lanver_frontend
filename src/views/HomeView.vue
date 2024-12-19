<script setup>
  import LocalHeader from '@/components/common/LocalHeader.vue';
  import NewsMenu from '@/components/home-page/NewsMenu.vue';

  import gsap from 'gsap';
  import { ref, onMounted, watchEffect, inject } from 'vue';

  const toggleSkipAnimation = inject('toggleSkipAnimation');

  onMounted(() => {
    const home_tl = gsap
      .timeline()
      .fromTo('.current-news-item', { opacity: 0, x: -100, scale: 0.85 }, { scale: 1, delay: .5, x: 0, opacity: 1 })
      .fromTo('.news-selector', { opacity: 0, x: -100, scale: 0.85 }, { scale: 1, x: 0, duration: .25, opacity: 1 })
      .fromTo('.news-list > *', { opacity: 0, x: -100, scale: 0.85 }, { scale: 1, x: 0, duration: .25, opacity: 1, stagger: .25 });

    watchEffect(() => { toggleSkipAnimation(home_tl); });
  }); 
</script>

<template>
  <div class="local">
    <LocalHeader title="Главная" />

    <div class="local__content">
      <NewsMenu />
    </div>  
  </div>
</template>