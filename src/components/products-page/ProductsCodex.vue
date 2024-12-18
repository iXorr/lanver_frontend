<script setup>
  import { ref } from 'vue';
  import MoreInfoIcon from '@/components/icons/MoreInfoIcon.vue';

  const productsData = ref([
    { id: '1', html_id: 'toLawyer', title: 'Юристу, бухгалтеру, HR-специалисту', descr: 'Линейка специализированных профессиональных справочных систем для сотрудников кадровых служб, юристов, бухгалтеров.' },

    { id: '2', html_id: 'toLeader', title: 'Руководителю, юристу', descr: 'Системы судебной практики для помощника юриста и судебного аналитика.' },
    
    { id: '3', html_id: 'toExpert', title: 'Помощник кадровика: Эксперт', descr: 'Специализированная информационно-справочная система по особенностям регулирования труда медицинских работников.' },
    
    { id: '4', html_id: 'toPaperWorker', title: 'Работа с документами и информацией', descr: '«Кодекс» предлагает ряд комплексных решений для отдельных категорий задач, связанных с доступом, обработкой, анализом и хранением больших и сверхбольших объемов документов.' },
    
    { id: '5', html_id: 'toDocsBase', title: 'База документов', descr: 'Линейка специализированных профессиональных справочных систем для сотрудников кадровых служб, юристов, бухгалтеров, а также для специалистов по государственным и муниципальным закупкам.' }
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
  #toLawyer,
  #toPaperWorker {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  #toDocsBase {
    grid-column-start: 3;
    grid-column-end: 5;
  }
</style>