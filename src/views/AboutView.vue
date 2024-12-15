<script setup>
  import gsap from 'gsap';

  import InfoPage from './InfoPage.vue';
  import AmbitionsPage from './AmbitionsPage.vue';
  import LocalHeader from '@/components/common/LocalHeader.vue';
</script>

<template>
  <div class="local">
    <LocalHeader title="О нас" />

    <div class="local__content">
      <!-- <InfoPage /> -->
      <AmbitionsPage />
    </div>
  </div>
</template>

<style scoped>
  .local__content > * {
    margin-bottom: 1.5rem;
  }
</style>