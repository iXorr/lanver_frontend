<script setup>
  import { RouterLink } from 'vue-router';

  import LocalHeader from '@/components/common/LocalHeader.vue';
</script>

<template>
  <div class="local">
    <LocalHeader title="Главная" />

    <section class="local__content">Добро пожаловать</section>

    <RouterLink to="/job" style="color: white;">РАБОТА</RouterLink>
  </div>
</template>