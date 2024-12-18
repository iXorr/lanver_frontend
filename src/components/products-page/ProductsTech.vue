<script setup>
  import { ref } from 'vue';
  import MoreInfoIcon from '@/components/icons/MoreInfoIcon.vue';

  const productsData = ref([
    { id: '2', html_id: 'toFactory', title: 'Промышленность', descr: 'Профессиональные справочные системы для руководителей и специалистов, работающих в энергетической, нефтегазовой, машиностроительной и металлургической отраслях.' },

    { id: '1', html_id: 'toBuilder', title: 'Строителю, проектировщику', descr: 'Внедрение и поддержка информационно-справочных систем Техэксперт по строительству и проектированию в Челябинске и области.' },
    
    { id: '3', html_id: 'toEngineer', title: 'Инженеру-конструктору', descr: 'Профессиональные справочные системы для руководителей и специалистов, работающих в машиностроении и конструкторских бюро.' },
    
    { id: '4', html_id: 'toLabSpecialist', title: 'Специалисту лаборатории, метрологу', descr: 'Профессиональные справочные системы для руководителей и специалистов лабораторий и метрологических служб.' },

    { id: '6', html_id: 'toFactorySecure', title: 'Охрана труда', descr: 'Уникальные аналитические и информационно-справочные сервисы, обеспечивающие максимально удобную и эффективную работу.' },
    
    { id: '5', html_id: 'toChemSpecialist', title: 'Специалисту пищевой, химической, фармацевтической промышленности', descr: 'Профессиональные справочные системы для специалистов пищевой, химической, медицинской и фармацевтической промышленности.' }
  ]);
</script>

<template>
  <div class="products-list">
    <div class="products-list__item" v-for="product in productsData" :id="product.html_id">
      <p class="descr">{{ product.descr }}</p>
      
      <div class="options">
        <h2>{{ product.title }}</h2>
        <button class="item__btn" @click="$emit('openDialog')">Получить демо-доступ</button>
      </div>

      <MoreInfoIcon 
        class="btn-show-more" 
        onclick="this.closest('.products-list__item').classList.toggle('hide')" />
    </div>
  </div>
</template>

<style scoped>
  #toFactory {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  #toChemSpecialist {
    grid-column-start: 3;
    grid-column-end: 5;
  }
</style>