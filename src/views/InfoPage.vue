<script setup>
  import LocalHeader from '@/components/common/LocalHeader.vue';
</script>

<template>
  <div class="local">
    <p class="info"><span class="info--expressive">ЛАНВЕР</span> - компания, которая продвигает программное обеспечение  «Кодекс — ТехЭксперт» для промышленных компаний.</p>

    <div class="stats">
      <p class="stats__elem">С <span class="stats__elem--expressive">2001</span> года наша компания находится на рынке</p>

      <p class="stats__elem">Больше <span class="stats__elem--expressive">200</span> реализованных проектов</p>
      
      <p class="stats__elem">Больше <span class="stats__elem--expressive">3000</span> сотрудников работают над цифровизацией</p>
    </div>
  </div>
</template>

<style scoped>
  .local {
    display: flex;
    align-items: center;
  }

  .info {
    max-width: 15rem;
    margin-right: 1.5rem;

    opacity: 0;
    animation: fade .5s .5s forwards;
  }

    .info--expressive {
      font-weight: 700;
      text-shadow: 0 0 2.5px #fff;
      letter-spacing: 2px;
    }

  .stats {
    border: 1px solid #fff;
    border-radius: 1rem;

    padding: 1rem;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    gap: 0 1.5rem;
    opacity: 0;
    animation: fade .5s 1s forwards;
  }

    .stats__elem {
      padding-right: 1.5rem;
      text-align: center;
      border-right: 1px solid #fff;
    }

    .stats__elem:last-of-type {
      border: none;
    }

    .stats__elem--expressive {
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 2px;
    }
</style>