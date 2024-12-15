<script setup>
  import { RouterLink } from 'vue-router';

  import SearchBar from '@/components/ui/SearchBar.vue';
</script>

<template>
  <nav class="nav-bar">    
    <SearchBar class="search-bar--child" />

    <div class="nav-bar__links">
      <RouterLink to="/" class="router-link">ГЛАВНАЯ</RouterLink>
      <RouterLink to="/about" class="router-link" >О КОМПАНИИ</RouterLink>
      <RouterLink to="/job" class="router-link" >ВАКАНСИИ</RouterLink>
      <RouterLink to="/reviews" class="router-link" >ОТЗЫВЫ</RouterLink>
      <RouterLink to="/products" class="router-link" >ПРОДУКТЫ</RouterLink>    
    </div>
  </nav>
</template>

<style>
  .router-link:active,
  .router-link:focus {
    padding: 0 1.25rem;
    transform: scale(1.15);
    letter-spacing: 2px;
    font-weight: 700;
  }
</style>

<style scoped>
  .nav-bar {
    text-wrap: nowrap;
    overflow: hidden;

    position: relative;
    display: flex;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid white;
  }

    .nav-bar__links {
      padding: 0 0.25rem;
      display: flex;
      align-items: center;

      transition: var(--fast-transition);
    }

      .nav-bar__links .router-link {
        padding: 0 1rem;
        border-radius: 0.1rem;
        text-decoration: none;
        font-size: 0.7rem;
        color: white;
        transition: var(--fast-transition);
      }
</style>