<script setup>
  import { ref } from 'vue';
  import SearchGlassIcon from '@/components/icons/SearchGlassIcon.vue';

  const isInputFocused = ref(false);

  // для дальнейшего поиска
  function sayHi() {
    alert('hi!');
  }
</script>

<template>
  <form :class="['search-bar', isInputFocused ? 'search-bar--expanded' : null]" @submit.prevent="sayHi">
    <input 
      class="search-bar__field" 
      type="text" 
      onblur="this.value = null"
      @blur="isInputFocused = false"
      @focus="isInputFocused = true">

    <SearchGlassIcon class="search-bar__icon" />
  </form>
</template>

<style scoped>
  .search-bar {
    position: relative;

    display: flex;
    align-items: center;
    width: 100px;
    height: 50px;

    transition: var(--standart-transition);
  }

  .search-bar--expanded {
    width: 400px;
  }

    .search-bar__icon {
      position: absolute;
      right: 15px;
      z-index: 1;

      transition: var(--fast-transition);
    }

    .search-bar__field {
      position: relative;

      width: 100%;
      height: 100%;
      font-size: 1rem;
      border-radius: 15px;
      padding: 15px 25px;

      transition: var(--standart-transition);
    }

    .search-bar__field:focus {
      padding-right: 60px;
    }
</style>