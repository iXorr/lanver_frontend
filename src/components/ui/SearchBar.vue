<script setup>
  import { ref } from 'vue';
  import SearchGlassIcon from '@/components/icons/SearchGlassIcon.vue';

  const isInputFocused = ref(false);
</script>

<template>
  <div class="search-bar">
    <SearchGlassIcon 
      :class="['search-bar__icon', isInputFocused ? 'search-bar__icon--dark' : null]" 
      @click="isInputFocused = !isInputFocused" />

    <input
      type="text"
      placeholder="Введите текст для поиска" 
      :class="['search-bar__field', isInputFocused ? 'search-bar__field--expanded' : null]"
      @blur="isInputFocused = false"
      onblur="this.value = null">

    <SearchGlassIcon 
      :class="['search-bar__submit-icon', isInputFocused ? 'search-bar__submit-icon--showed' : null]" />
  </div>
</template>

<style scoped>
  .search-bar__submit-icon {
    z-index: 1;
    position: absolute;
    right: 2.5%;
    opacity: 0;
  }

  .search-bar__submit-icon--showed {
    opacity: 1;
    /* animation: name duration timing-function delay iteration-count direction fill-mode; !!! */
    /* а может, и очередь анимаций сделать через... CSS! */
  }

    .search-bar__submit-icon * {
      stroke: #000;
    }

  .search-bar {
    display: flex;
    justify-content: center;
    align-items: center;

    border-right: 1px solid white;
    border-radius: 0;
  }

    .search-bar__icon {
      z-index: 1;
      margin-right: 0.75rem;
      cursor: pointer;
    }

      .search-bar__icon * {
        transition: var(--standart-transition);
      }

      .search-bar__icon--dark * {
        stroke: #000;
      }

    .search-bar__icon:active {
      transform: scale(1.1);
    }

    .search-bar__field {
      position: absolute;
      font-size: 0.75rem;

      height: 100%;
      left: 0;
      width: 0;
      transition: .5s ease-in-out;

      color: transparent;
    }

    .search-bar__field--expanded {
      color: black;
      width: 100%;
      padding-right: 3.5rem;
      padding-left: 2.5rem;
    }
</style>