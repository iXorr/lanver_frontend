<script setup>
  import Navbar from '@/components/common/Navbar.vue';
</script>

<template>
  <header class="app-header">
    <div class="branding">
      <img src="/public/img/logo.png" alt="logo">
      <p>ЛАНВЕР</p>
    </div>

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

    .branding {
      display: flex;
      align-items: center;
      color: #fff;
      font-weight: 600;
      letter-spacing: 2.5px;

      margin-right: 3rem;
      user-select: none
    }
    
      .branding img {
        width: 2.5rem;
        height: 1.75rem;
        margin-right: 0.85rem;
      }

      .branding p {
        font-size: 1rem;
      }
</style>