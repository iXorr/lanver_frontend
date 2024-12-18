<script setup>
  import MoreInfoIcon from '@/components/icons/MoreInfoIcon.vue';
</script>

<template>
  <div class="products-list">
    <div class="products-list__item" id="toBuilder">
      <p class="descr">
          Внедрение и поддержка информационно-справочных систем Техэксперт по строительству и проектированию в Челябинске и области.
      </p>
      
      <div class="options">
          <h2>Строителю, проектировщику</h2>
          <button class="item__btn" @click="openDialog">Получить демо-доступ</button>
      </div>

      <MoreInfoIcon class="btn-show-more" onclick="this.closest('.products-list__item').classList.toggle('hide')" />
    </div>
    
    <div class="products-list__item" id="toFactory">
      <p class="descr">
          Внедрение и поддержка информационно-справочных систем Техэксперт по строительству и проектированию в Челябинске и области.
      </p>
      
      <div class="options">
          <h2>Промышленность</h2>
          <button class="item__btn" @click="openDialog">Получить демо-доступ</button>
      </div>

      <MoreInfoIcon class="btn-show-more" onclick="this.closest('.products-list__item').classList.toggle('hide')" />
    </div>
  </div>
</template>