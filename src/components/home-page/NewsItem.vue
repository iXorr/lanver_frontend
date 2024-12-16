<script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  const props = defineProps(['title', 'details', 'img']);
  const emit = defineEmits();

  const chooseItem = () => {
    emit('select', { props });
  }
</script>

<template>
  <div class="news-item" @click="chooseItem">
    <h3 class="news-title">{{ title }}</h3>
    <img class="news-img" :src="img" alt="news">
  </div>
</template>

<style scoped>
  .news-item {
    display: grid;
    grid-template-columns: 60% 40%;

    border: 1px solid #fff;
    border-radius: 1rem;
    cursor: pointer;

    transition: .15s;
  }

  .news-item:active {
    transform: scale(0.9);
  }

    .news-title {
      padding: 0 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 1rem;
      font-weight: 500;
    }

    .news-details {
      margin-top: 0.5rem;
    }

    .news-img {
      border-left: 1px solid white;
      border-end-end-radius: 1rem;
      border-top-right-radius:  1rem;
      width: 100%;
      height: 7rem;
    }

  /* .inner-enter-active, .inner-leave-active {
    transition: 0.5s ease-in-out;
  }
  .inner-enter, .inner-leave-to {
    opacity: 0;
  } */
</style>
