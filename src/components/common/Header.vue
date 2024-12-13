<script setup>
  import SearchBar from '@/components/ui/SearchBar.vue';
  import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <div class="branding">
      <img src="/public/img/logo.png" alt="logo">

      <p>ЛАНВЕР</p>
    </div>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/tech-expert">Tech. expert</RouterLink>
      <RouterLink to="/codex">Codex</RouterLink>
    </nav>

    <SearchBar />
  </header>
</template>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    z-index: 2;
    top: 0;
    padding: 25px;
    margin-bottom: 50px;
  }

    header .branding {
      display: flex;
      align-items: center;
      color: #fff;
      font-weight: 600;
    }

    header img {
      width: 60px;
      height: 45px;
      margin-right: 20px;
    }

    nav {
      position: relative;

      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 450px;
      height: 75px;
      padding: 0 25px;
      border-radius: 15px;
      border: 1px solid white;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }

      nav > * {
        padding: 10px;
        border-radius: 10px;
        text-decoration: none;
        text-wrap: nowrap;

        color: #fff;

        transition: var(--fast-transition);
      }

      nav > *:active{
        transform: scale(1.15);
      }
</style>