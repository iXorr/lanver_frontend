<script setup>
  import { onMounted } from 'vue';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline1 = gsap.timeline();

    timeline1.fromTo('block-1', {
      opacity: 0
    }, {
      opacity: 1,
      rotateZ: 300
    });

    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.block-2',
        start: 'top 700px',
        end: 'top 100px',
        scrub: 1
      }
    }).fromTo('.block-2', {
      opacity: 0
    }, {
      opacity: 1,
      rotateZ: 50
    });
  });
</script>

<template>
  <div class="ambitions-root">
    <div class="block block-1"></div>
    <div class="block block-2"></div>
  </div>
</template>

<style scoped>
  .block {
    width: 100px;
    height: 100px;
  }

    .block-1 {
      background: goldenrod;
      margin-bottom: 500px;
    }

    .block-2 {
      background: olive;
    }

    .block-3 {
      background: cadetblue;
    }
</style>