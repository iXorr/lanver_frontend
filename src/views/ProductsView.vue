<script setup>
  import LocalHeader from '@/components/common/LocalHeader.vue';
  import ProductsList from '@/components/products-page/ProductsList.vue';

  import gsap from 'gsap';
  import { ref, onMounted, watchEffect } from 'vue';

  const skipAnimation = ref(false);

  onMounted(() => {
    window.addEventListener('scroll', () => skipAnimation.value = true);

    const job_tl = gsap
      .timeline()
      .fromTo('.products-list', { opacity: 0 }, { delay: .5, opacity: 1 })
      .fromTo('.products-filter', { opacity: 0 }, { opacity: 1 })

    watchEffect(() => {
      if (skipAnimation.value) {
        job_tl.timeScale(4);
      }
    });

    return () => {
      window.removeEventListener('scroll');
    };
  }); 
</script>

<template>
  <div class="job-root">
    <LocalHeader title="Продукты" />
    <ProductsList />
  </div>
</template>