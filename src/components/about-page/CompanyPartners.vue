<script setup>
  import { ref } from 'vue';
  import DialogMenu from '@/components//ui/DialogMenu.vue';

  const dialogMenuRef = ref(null);
  
  function openDialog() {
    if (dialogMenuRef.value) {
      dialogMenuRef.value.showModal();
    }
  }
</script>

<template>
  <div class="partners">
    <h1 class="partners__header">Наши партнёры</h1>
    
    <div class="partners__img-container">
      <a href="#"><img src="/public/img/partners/unity.png" alt="unity" class="partners__img"></a>
      <a href="#"><img src="/public/img/partners/community.png" alt="unity" class="partners__img"></a>
      <a href="#"><img src="/public/img/partners/creative-corner.png" alt="unity" class="partners__img"></a>
      <a href="#"><img src="/public/img/partners/connect.png" alt="unity" class="partners__img"></a> 
    </div>

    <button class="partners__offer-btn" @click="openDialog">Стать партнёром</button>
  </div>

  <DialogMenu ref="dialogMenuRef" />
</template>

<style scoped>
  .partners {
    display: block;
  }

    .partners__header {
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
    }

    .partners__img-container {
      width: fit-content;
      border-right: 1px solid white;
      border-left: 1px solid white;
      padding: 0 1rem;

      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 1rem;

      margin-bottom: 1rem;
    }

      .partners__img {
        flex-shrink: 0;
        width: 5rem;
        height: 5rem;
        border-radius: 1rem;
      }

      .partners__img:last-child {
        margin: 0;
      }

    .partners__offer-btn {
      opacity: 0;
      height: fit-content;
      align-self: center;
      font-size: 1rem;
      padding: 1rem;
      color: white;
      background: none;
      border: 1px solid #fff;
      border-radius: 0.5rem;
      transition: var(--fast-transition);
      cursor: pointer;
      box-shadow: 0 10px 0 #fff;
    }

    .partners__offer-btn:active {
      transform: translateY(10px);
      box-shadow: none;
    }
</style>