<script setup>
  import LocalHeader from '@/components/common/LocalHeader.vue';
  import ProductsList from '@/components/products-page/ProductsList.vue';

  import gsap from 'gsap';
  import { ref, onMounted, watchEffect, inject } from 'vue';

  const toggleSkipAnimation = inject('toggleSkipAnimation');

  onMounted(() => {
    const products_tl = gsap
      .timeline()
      .fromTo('.products-list', { opacity: 0 }, { delay: .2, duration: .2, opacity: 1 })
      .fromTo('.products-list__item', { opacity: 0, y: -50 }, { duration: .25, y: 0, opacity: 1, stagger: .25 })
      .fromTo('.products-filter', { opacity: 0, y: -50}, { y: 0, opacity: 1, delay: .5 })

    watchEffect(() => { toggleSkipAnimation(products_tl); });
  }); 
</script>

<template>
  <div class="products-root">
    <LocalHeader title="Продукты" />
    <ProductsList />
  </div>
</template>

<style>
  /* .products-list,
  .products-list__item,
  .products-filter {
    opacity: 0;
  } */
</style>