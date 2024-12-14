<script setup>
  import LocalHeader from '@/components/common/LocalHeader.vue';

  // задать какой-нибудь delay через переменную css и функцию?
</script>

<template>
  <LocalHeader title="О нас" />

  <p class="info"><span class="info--expressive">ЛАНВЕР</span> - компания, которая продвигает программное обеспечение  «Кодекс — ТехЭксперт» для промышленных компаний.</p>

  <div class="stats">
    <p class="stats__elem">С <span class="stats__elem--expressive">2001</span> года наша компания находится на рынке</p>

    <p class="stats__elem">Больше <span class="stats__elem--expressive">200</span> реализованных проектов</p>
    
    <p class="stats__elem">Больше <span class="stats__elem--expressive">3000</span> сотрудников работают над цифровизацией и автоматизацией ваших процессов</p>
  </div>
</template>

<style scoped>
  .info {  
    max-width: 25rem;
    margin-bottom: 3.5rem;

    opacity: 0;
    animation: fade .5s .5s forwards;
  }

    .info--expressive {
      font-weight: 700;
      text-shadow: 0 0 2.5px #fff;
      letter-spacing: 2px;
    }

  .stats {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0 5rem;
    opacity: 0;
    animation: fade .5s 1s forwards;
  }

    .stats__elem--expressive {
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: 2px;
    }
</style>