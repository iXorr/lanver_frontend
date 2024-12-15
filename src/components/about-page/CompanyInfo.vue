<script setup>
  import MarketIcon from '@/components/icons/MarketIcon.vue';
  import ProductIcon from '@/components/icons/ProductIcon.vue';
  import WorkersIcon from '@/components/icons/WorkersIcon.vue';
</script>

<template>
  <div class="local">
    <p class="info"><span class="info--expressive">ЛАНВЕР</span> - компания, которая продвигает программное обеспечение  «Кодекс — ТехЭксперт» для промышленных компаний.</p>

    <div class="stats">
      <div class="stats__elem">
        <MarketIcon class="stats__elem-icon" />
        
        <p class="stats__elem-text">С <span class="stats__elem--expressive">2001</span> года наша компания находится на рынке</p>
      </div>

      <div class="stats__elem">
        <ProductIcon class="stats__elem-icon" />
        
        <p class="stats__elem-text">Больше <span class="stats__elem--expressive">200</span> реализованных проектов</p>
      </div>

      <div class="stats__elem">
        <WorkersIcon class="stats__elem-icon" />
        
        <p class="stats__elem-text">Больше <span class="stats__elem--expressive">3000</span> сотрудников работают над цифровизацией</p>
      </div>
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
      margin-right: 1rem;
    }

      .info--expressive {
        font-weight: 700;
        text-shadow: 0 0 2.5px #fff;
        letter-spacing: 2px;
      }

    .stats {
      overflow: hidden;
      border: 2px solid #fff;
      border-radius: 1rem;

      padding: 1rem;

      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 0 2rem;

      width: 100%;
    }

      .stats__elem {
        display: flex;
        align-items: center;
        justify-content: center;
      }

        .stats__elem-icon {
          flex-shrink: 0;
          width: 3rem;
          height: 3rem;
          margin-right: 1rem;

          padding: 0.5rem;
          border-radius: 0.5rem;
          background: #ffffff;
        }

        .stats__elem-text {
          max-width: 12rem;
        }

      .stats__elem:last-of-type {
        border: none;
      }

      .stats__elem--expressive {
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 2px;
      }

  @media (max-width: 720px) {
    .stats {
      display: block;
    }
  }

  @media (max-width: 420px) {
    .local {
      display: block;
    }
  }
</style>