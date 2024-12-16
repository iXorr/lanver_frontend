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

      setTimeout(async () => {
        apiResponse.value = await (await fetch(apiUrl.value)).json();
      }, 1500);
    }
  });
</script>

<template>
  <div class="news">
    <LocalHeader title="Результаты поиска" />

    <div v-if="searchQuery">
      <Transition>
        <p>Search Query: {{ searchQuery }}</p>
      </Transition>

      <Transition>
        <SpinLoader v-if="!apiResponse"/>
        <p v-else>Ответ: {{ apiResponse }}</p>
      </Transition>
    </div>

    <div v-else>
      <p>У вас не было запроса в поисковой строке.</p>
    </div>
  </div>
</template>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  p {
    margin-bottom: 1rem;
  }
</style>