<script setup>
  import { RouterLink } from 'vue-router';

  import SearchBar from '../ui/SearchBar.vue';
  import { onMounted, ref } from 'vue';

  const route = ref(null);

  // onMounted(() => {
  // });

  function sayhi() {
    route.value.style.color = "#000000";
  }
</script>

<template>
  <nav class="header__nav">
    <SearchBar @click="sayhi" />

    <RouterLink to="/" class="router-link" ref="route">ГЛАВНАЯ</RouterLink>
    <RouterLink to="/" class="router-link" >О КОМПАНИИ</RouterLink>
    <RouterLink to="/tech-expert" class="router-link" >ВАКАНСИИ</RouterLink>
    <RouterLink to="/codex" class="router-link" >ОТЗЫВЫ</RouterLink>
    <RouterLink to="/tech-expert" class="router-link" >ПРОДУКТЫ</RouterLink>
  </nav>
</template>

<style>
  .header__nav {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 0.5rem;
    border-radius: 15px;
    border: 1px solid white;
  }

    .header__nav > * {
      display: flex;
      justify-content: center;
      align-items: center;

      text-decoration: none;
      text-wrap: nowrap;

      padding: 0 0.75rem;
      border-radius: 0.1rem;
      color: white;

      font-size: 0.7rem;

      transition: var(--fast-transition);
    }

    /* .router-link--search {
      padding: 0;
    } */



    .router-link:active,
    .router-link:focus {
      transform: scale(1.15);
      font-weight: 600;
    }
</style>