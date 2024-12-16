<script setup>
  import { ref } from 'vue';
  import JobFilter from './JobFilter.vue';

  const selectedFilter = ref(null);
  const filteredJobs = ref([]);
  
  const handleSelect = (filter) => {
    selectedFilter.value = filter;
  }

  const getFilteredJobs = (jobs) => {
    filteredJobs.value = jobs;
  }
</script>

<template>
  <div class="job-content">
    <!-- <transition-group name="list" tag="div" class="job-list"> -->
      <div class="job-list">
        <a 
        v-for="job in filteredJobs"
        :key="job.id"
        class="job-list__item"
        href="#">

          <div class="base-info">
            <h2>{{ job.title }}</h2>
            <p>{{ job.description }}</p>
          </div>

          <div class="salary-info">{{ job.salary }} <br> в месяц</div>
        </a>
      </div>
    <!-- </transition-group> -->

    <JobFilter @select='handleSelect' @getJobs="getFilteredJobs" />
  </div>
</template>

<style scoped>
  .job-content {
    display: grid;
    grid-template-columns: 75% 20%;
    gap: 3rem;
  }

  .job-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 5.5rem 5.5rem 5.5rem;
    gap: 1.5rem 1rem;
  }

  .job-list__item {
    backdrop-filter: blur(1rem);
    border: 1px solid #fff;
    border-radius: 1rem;
    padding: 1rem;

    position: relative;

    color: white;
    text-decoration: none;
    transition: .25s ease-in-out;
  }

  .job-list__item:hover {
    transform: translateY(-0.5rem);
  }

    .job-list__item .base-info {
      width: 75%;
    }

    .job-list__item .salary-info {
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 0.85rem;
    }

    .job-list__item h2 {
      font-size: 1.15rem;
      
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