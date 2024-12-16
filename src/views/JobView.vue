<script setup>
  import LocalHeader from '@/components/common/LocalHeader.vue';
  import JobList from '@/components/job-page/JobList.vue';

  import gsap from 'gsap';
  import { ref, onMounted, watchEffect } from 'vue';

  const skipAnimation = ref(false);

  onMounted(() => {
    window.addEventListener('scroll', () => skipAnimation.value = true);

    const job_tl = gsap
      .timeline()
      .fromTo('.job-content', { opacity: 0 }, { delay: .1, opacity: 1 })
      .fromTo('.job-list', { opacity: 0, x: -50 }, { x: 0, opacity: 1, rotate: 0})
      .fromTo('.job-filter', { opacity: 0, x: 25 }, { x: 0, duration: .5, opacity: 1 });

    watchEffect(() => {
      if (skipAnimation.value) {
        job_tl.timeScale(4);
      }
    });

    return () => {
      window.removeEventListener('scroll');
    };
  }); 
</script>

<template>
  <div class="job-root">
    <LocalHeader title="Вакансии" />
    <JobList />
  </div>
</template>