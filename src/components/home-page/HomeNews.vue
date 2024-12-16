<script setup>
  import { ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  const route = useRoute();

  const API_KEY = '2545342d2b8844c2800cc86277295205';
  const apiUrl = ref();

  const isSearch = ref(false);  
  const searchText = ref(route.query.q);
  const newsResponse = ref(null);

  watch(route, async () => {
    (route.query.q) ? isSearch.value = true : isSearch.value = false;
    searchText.value = route.query.q;
    apiUrl.value = searchText.value 
      ? `https://newsapi.org/v2/everything?q=${searchText.value}&apiKey=${API_KEY}` 
      : null;
    
    newsResponse.value = await (await fetch(apiUrl.value)).json();
  });
</script>

<template>
  <div class="news">
    <p>Поиск: {{ searchText }}</p>
    <p>Результат: {{ newsResponse ? newsResponse : 'not ok' }}</p>
    <p>Запрос: {{ apiUrl }}</p>
    <h1>Новости</h1>

    <div class="news-wrapper">
      <!-- <div class="news__item">
        <img class="news__item-img" src="/public/img/news/1.png" alt="item">
        <p class="news__item-date">12.12.2024</p>
        <p class="news__item-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus magnam unde aliquid ex eveniet laudantium quisquam corporis saepe commodi laboriosam eos eaque, nulla fuga vitae dolorum est ipsam minus!</p>

        <button class="news__item-more">More</button>
      </div> -->

      <!-- <div class="news__item">
        <img class="news__item-img" src="/public/img/news/1.png" alt="item">
        <p class="news__item-date">12.12.2024</p>
        <p class="news__item-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus magnam unde aliquid ex eveniet laudantium quisquam corporis saepe commodi laboriosam eos eaque, nulla fuga vitae dolorum est ipsam minus!</p>

        <button class="news__item-more">More</button>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
  .news-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    margin-top: 2rem;
  }

    .news__item,
    .news__item-img {
      border: 1px solid #fff;
    }

    .news__item {
      width: 20rem;
      border-radius: 1rem;
    }

      .news__item-img {
        position: relative;
        top: -1rem;

        left: 50%;
        transform: translateX(-50%);

        width: 90%;
        height: 7.5rem;
        border-radius: 1rem;
      }
</style>