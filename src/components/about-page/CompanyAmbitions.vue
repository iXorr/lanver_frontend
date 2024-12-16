<script setup>
  import { ref } from 'vue';

  const showTextFirst = ref(false);
  const showTextSecond = ref(false);
  const showTextThird = ref(false);
</script>

<template>
  <div class="ambitions-root">
    <h1 class="ambitions__header">Наши цели</h1>

    <div class="ambitions__list">
      <div class="ambitions__list-item" @click="showTextFirst = !showTextFirst">        
          <img src="/public/img/ambitions/clients.png" alt="icon" v-if="!showTextFirst">
          <p v-else>Расширение клиентской базы за счет <span class="expressed-text">уникального опыта</span> и постоянного развития центров компетенции</p>
      </div>

      <div class="ambitions__list-item" @click="showTextSecond = !showTextSecond">
        <img src="/public/img/ambitions/projects.png" alt="icon" v-if="!showTextSecond">
        <p v-else>Реализация <span class="expressed-text">высокотехнологичных проектов</span> для крупного и среднего бизнеса</p>
      </div>

      <div class="ambitions__list-item" @click="showTextThird = !showTextThird">
        <img src="/public/img/ambitions/digital.png" alt="icon" v-if="!showTextThird">
        <p v-else>Содействие и участие в крупнейших проектах <span class="expressed-text">цифровой трансформации страны</span></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .expressed-text {
    font-weight: 700;
  }

  p {
    text-align: center;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .ambitions__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
  }

    .ambitions__list-item {
      backdrop-filter: blur(1rem);

      user-select: none;
      cursor: pointer;

      width: 14rem;
      height: 10rem;
      border: 1px solid #fff;
      border-radius: 1rem;
      padding: 1rem;
      
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .ambitions__list-item > * {
      animation: shrink .5s forwards;
    }

    .ambitions__list-item:active > .test {
      opacity: 1;
    }

      .ambitions__list-item img {
        width: 7.5rem;
        height: 7.5rem
      }

@media (max-width: 1660px) {
  .ambitions__list-item {
      width: 11.5rem;
    }
}

@keyframes shrink {
  from {
    transform: scale(0.85);
  }

  to {
    transform: scale(1.);
  }
}
</style>