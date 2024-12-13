<script setup>
  import { RouterLink } from 'vue-router';

  import Navbar from '@/components/common/Navbar.vue';
</script>

<template>
  <header>
    <RouterLink to="/" class="router-link router-link--icon">
      <div class="branding">
        <img src="/public/img/logo.png" alt="logo">
        <p>ЛАНВЕР</p>
      </div>
    </RouterLink>

    <Navbar />
  </header>
</template>

<style scoped>
  header {
    display: flex;
    align-items: center;
    
    z-index: 2; 
    top: 0;
    padding-top: 35px;
    margin-bottom: 50px;
  }

    .branding {
      display: flex;
      align-items: center;
      color: #fff;
      font-weight: 600;
      letter-spacing: 2.5px;
    }

      .branding img {
        width: 60px;
        height: 45px;
        margin-right: 20px;
      }

      .branding p {
        font-size: 1rem;
      }

      .router-link--icon {
        padding: 0;
        margin: 0;
      }
</style>