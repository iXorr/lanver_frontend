<script setup>
  import { ref } from 'vue';
  import ProductsFilter from './ProductsFilter.vue';
  import ProductsCodex from './ProductsCodex.vue';
  import ProductsTech from './ProductsTech.vue';
  import DialogMenu from '@/components//ui/DialogMenu.vue';

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
</script>

<template>
  <div class="products-content">
    <div class="products-wrapper">
      <ProductsCodex v-if="selectedFilter == 'codex'" @open-dialog="openDialog" />
      <ProductsTech v-else @open-dialog="openDialog" />
    </div>

    <ProductsFilter @select='handleSelect' />
    <DialogMenu ref="dialogMenuRef" />
  </div>
</template>

<style>
  .products-content {
    display: grid;
    grid-template-columns: 75% 20%;
    gap: 2.5rem;
  }

    .products-list {
      height: fit-content;
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 1.5rem 1rem;
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

      .products-list__item:hover {
        transform: translateY(-0.5rem);
      }

        .products-list__item h2 {
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .products-list__item p {
          font-size: 0.8rem;
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

          .btn-show-more {
            position: absolute;
            right: 0.5rem;
            bottom: 0.5rem;
            width: 1.5rem;
            height: 1.5rem;
            transition: .35s ease-in-out;
            cursor: pointer;
          }
</style>