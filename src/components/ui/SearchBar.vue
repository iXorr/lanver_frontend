<script setup>
  import { ref } from 'vue';
  import SearchGlassIcon from '@/components/icons/SearchGlassIcon.vue';

  const isInputFocused = ref(false);
</script>

<template>
  <div class="search-bar">
    <SearchGlassIcon class="search-bar__icon" @click="isInputFocused = !isInputFocused" />

    <input 
      placeholder="Введите текст для поиска" 
      :class="['input', isInputFocused ? 'input--expanded' : null]"
      @blur="isInputFocused = false"
      type="text">
  </div>
</template>

<style scoped>
  .search-bar {
    display: flex;
    justify-content: center;
    align-items: center;

    border-right: 1px solid white;
    border-radius: 0;
  }

  .input {
    position: absolute;
    font-size: 0.75rem;

    left: 90px;
    height: 100%;
    width: 0;
    transition: .5s ease-in-out;
  }

  .input--expanded {
    width: 650px;
  }
</style>