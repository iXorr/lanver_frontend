<script setup>
  import { RouterLink } from 'vue-router';

  import Navbar from '@/components/common/Navbar.vue';
</script>

<template>
  <header class="app-header">
    <RouterLink to="/" class="router-link router-link--brand">
      <div class="branding">
        <img src="/public/img/logo.png" alt="logo">
        <p>ЛАНВЕР</p>
      </div>
    </RouterLink>

    <Navbar />
  </header>
</template>

<style scoped>
  .app-header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1.5rem;
    margin-bottom: 2.5rem;
  }

    .app-header .branding {
      display: flex;
      align-items: center;
      color: #fff;
      font-weight: 600;
      letter-spacing: 2.5px;
    }

      .app-header .branding img {
        width: 2.5rem;
        height: 1.75rem;
        margin-right: 0.85rem;
      }

      .app-header .branding p {
        font-size: 1rem;
      }

      .app-header .router-link--brand {
        margin-right: 3rem;

        text-decoration: none;
        transition: var(--fast-transition);
      }
</style>