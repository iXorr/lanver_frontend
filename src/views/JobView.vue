<script setup>
  import LocalHeader from '@/components/common/LocalHeader.vue';
  import JobList from '@/components/job-page/JobList.vue';

  import gsap from 'gsap';
  import { ref, onMounted, watchEffect, inject } from 'vue';

  const toggleSkipAnimation = inject('toggleSkipAnimation');

  onMounted(() => {
    const job_tl = gsap
      .timeline()
      .to('.job-list__item', { delay: .25, opacity: 1, stagger: .2 })
      .fromTo('.job-filter', { opacity: 0, x: 50 }, { x: 0, delay: .5, duration: .35, opacity: 1 });

    watchEffect(() => { toggleSkipAnimation(job_tl); });
  }); 
</script>

<template>
  <div class="job-root">
    <LocalHeader title="Вакансии" />
    <JobList />
  </div>
</template>

<style>
  .job-list__item {
    opacity: 0;
  }
</style>