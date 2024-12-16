<script setup>
  import LocalHeader from '@/components/common/LocalHeader.vue';

  import HomeNews from '@/components/home-page/HomeNews.vue';
</script>

<template>
  <div class="local">
    <LocalHeader title="Главная" />

    <p>{{ searchText }}</p>

    <div class="local__content">
      <HomeNews class="local__content-elem" />
    </div>  
  </div>
</template>