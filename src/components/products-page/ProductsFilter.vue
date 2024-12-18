<script setup>
  import { ref, watchEffect } from 'vue';
  const selectedFilter = ref('codex');

  const emit = defineEmits();

  const chooseFilter = () => {
    emit('select', selectedFilter.value);
  }

  watchEffect(() => {
    chooseFilter(selectedFilter);
  });
</script>

<template>
  <form class="products-filter">
    <h1 class="products-filter__header">Справочная система</h1>

    <div class="products-filter__vars">
      <div class="products-filter__var">
        <input type="radio" id="codex" value="codex" v-model="selectedFilter" checked />
        <label for="codex">«Кодекс»</label>
      </div>

      <div class="products-filter__var">
        <input type="radio" id="tech" value="tech" v-model="selectedFilter" />
        <label for="tech">«Техэксперт»</label>
      </div>
    </div>
  </form>
</template>

<style scoped>
.products-filter__header {
  font-size: 1.25rem;
  font-weight: 500;
}

.products-filter__vars {
  display: flex;
  flex-direction: column;
}

.products-filter__var {
  position: relative;
  margin-bottom: 1rem;
}

.products-filter__var input {
  position: absolute;
  opacity: 0;
}

.products-filter__var label {
  font-weight: 600;
  display: inline-block;
  padding: 10px 20px;
  border: 2px solid white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.products-filter__var input:checked + label {
  background-color: white;
  color: #000;
}
</style>
