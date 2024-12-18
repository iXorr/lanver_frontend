<script setup>
  import { ref, defineEmits } from 'vue';
  import ProductsFilter from './ProductsFilter.vue';
  import DialogMenu from '@/components//ui/DialogMenu.vue';

  import ProductsCodex from './ProductsCodex.vue';

  const selectedFilter = ref(null);
  
  const handleSelect = (filter) => {
    selectedFilter.value = filter;
  }

  const dialogMenuRef = ref(null);
  function openDialog() {
    if (dialogMenuRef.value) {
      dialogMenuRef.value.showModal();
    }
  }

  const emits = defineEmits([]);
</script>

<template>
  <div class="products-content">
    <div class="products-wrapper">
      <ProductsCodex v-if="selectedFilter == 'codex'" />
    </div>

    <ProductsFilter @select='handleSelect' />
    <DialogMenu ref="dialogMenuRef" />
  </div>
</template>

<style>
  .item__btn {
    margin-top: 0.5rem;
    backdrop-filter: blur(1rem);
    height: fit-content;
    align-self: center;
    font-size: 0.8rem;
    padding: 0.5rem;
    color: white;
    background: none;
    border: 1px solid #fff;
    border-radius: 0.5rem;
    transition: var(--fast-transition);
    cursor: pointer;
    box-shadow: 0 10px 0 #fff;
  }

  .item__btn:active {
    transform: translateY(10px);
    box-shadow: none;
  }

  .options {
    display: block;
  }

  .descr {
    display: none;
  }

  .hide > .options {
    display: none;
  }

  .hide > .descr {
    display: block;
  }

  .btn-show-more {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    width: 2rem;
    height: 2rem;
    transition: .35s ease-in-out;
    cursor: pointer;
  }

  .products-content {
    display: grid;
    grid-template-columns: 75% 20%;
    gap: 2.5rem;
  }

  .products-list {
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1.5rem 1rem;
  }

  #toBuilder {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  #toChemSpecialist {
    grid-column-start: 2;
    grid-column-end: 4;
  }
  
  .products-list__item {
    height: 11rem;
    backdrop-filter: blur(1rem);
    border: 1px solid #fff;
    border-radius: 1rem;
    padding: 1rem;

    position: relative;

    color: white;
    text-decoration: none;
    transition: .25s ease-in-out;
  }

    .products-list__item .salary-info {
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 0.85rem;
    }

    .products-list__item h2 {
      font-size: 1.15rem;
      font-weight: 500;
    }

  .products-list__item:hover {
    transform: translateY(-0.5rem);
  }

  .list-move,
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateY(0.5rem);
  }
</style>