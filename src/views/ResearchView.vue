<script setup>
  import SpinLoader from '@/components/common/SpinLoader.vue';
  import LocalHeader from '@/components/common/LocalHeader.vue';

  import { ref, watchEffect } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const API_KEY = '2545342d2b8844c2800cc86277295205';
  const apiUrl = ref(null);
  const apiResponse = ref(null);
  const searchQuery = ref(null);

  watchEffect(async () => {
    apiResponse.value = null;
    searchQuery.value = route.query.q;

    if (searchQuery.value) {
      apiUrl.value = `https://newsapi.org/v2/everything?q=${searchQuery.value}&apiKey=${API_KEY}`;
      apiResponse.value = await (await fetch(apiUrl.value)).json();
    }
  });
</script>

<template>
  <div class="news" style="padding-bottom: 5rem;">
    <LocalHeader title="Результаты поиска" />

    <div v-if="searchQuery">
      <Transition>
        <SpinLoader v-if="!apiResponse"/>
        <div v-else>

          <div class="news-list">
            <a target="_blank" :href="apiResponse.articles[n].url" class="news-list__item" v-if="apiResponse.status == 'ok'" v-for="n in 10">
              <div class="meta">
                <p class="author">Авторство: {{ apiResponse.articles[n].author }}</p>
              </div>

              <div class="content">
                <p class="title">{{ apiResponse.articles[n].title }}</p>

                <div class="main">
                  <p class="description">
                    <img :src="apiResponse.articles[n].urlToImage" alt="icon">
                    {{ apiResponse.articles[n].description }}
                  </p>
                </div>
              </div>
            </a>

            <div v-else class="error">Ошибочка</div>
          </div>
        </div>
      </Transition>
    </div>

    <div v-else>
      <p>У вас не было запроса в поисковой строке.</p>
    </div>
  </div>
</template>

<style scoped>
  .news-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .news-list__item {
    text-decoration: none;
    color: #fff;

    border: 1px solid #fff;
    border-radius: 1rem;
    backdrop-filter: blur(1rem);
    padding: 1rem;
    position: relative;
    transition: .25s ease-in-out;
    cursor: pointer;
  }

  .news-list__item:hover {
    transform: scale(0.95);
  }

  .news-list__item img {
    float: right;
    width: 17rem;
    height: 10rem;
    border-radius: 1rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #fff;
  }
  
  .news-list__item .meta {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid #fff;
  }

  .news-list__item .content {
    text-align: justify;
    text-wrap: pretty;
    margin-top: 1rem;
  }

  .news-list__item .title {
    font-weight: 600;
    font-style: italic;
  }

  .news-list__item .description {
    font-size: 0.85rem;
  }

  p {
    margin-bottom: 1rem;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>