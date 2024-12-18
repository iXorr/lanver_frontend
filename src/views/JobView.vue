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
      .fromTo('.job-content', { opacity: 0 }, { opacity: 1, duration: .2 })
      .fromTo('.job-list', { opacity: 0 }, { opacity: 1, duration: .2 })
      .fromTo('.job-list__item', { opacity: 0 }, { opacity: 1, stagger: .2 })
      .fromTo('.job-filter', { opacity: 0, x: 50 }, { x: 0, delay: .5, duration: .35, opacity: 1 });

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