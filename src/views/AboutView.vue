<script setup>
  import { ref, onMounted, watchEffect } from 'vue';
  import gsap from 'gsap';

  import CompanyInfo from '@/components/about-page/CompanyInfo.vue';
  import CompanyAmbitions from '@/components/about-page/CompanyAmbitions.vue';
  import CompanyPartners from '@/components/about-page/CompanyPartners.vue';
  import LocalHeader from '@/components/common/LocalHeader.vue';

  const skipAnimation = ref(false);

  onMounted(() => {
    window.addEventListener('scroll', () => skipAnimation.value = true);

    const about_tl = gsap.timeline();
    about_tl
      .fromTo('.info-elem', { opacity: 0, scale: 0.85 }, { scale: 1, delay: .5, duration: .25, opacity: 1 })
      .fromTo('.stats__elem', { opacity: 0, y: 250 }, { opacity: 1, y: 0, stagger: .15 })
      .fromTo('.ambitions__header', { opacity: 0, x: -100 }, { opacity: 1, x: 0 })
      .fromTo('.ambitions__list-item', { opacity: 0 }, { opacity: 1, stagger: .15 })
      .fromTo('.partners__header', { opacity: 0 }, { opacity: 1, duration: 0.1 })
      .fromTo('.partners__img-container', { opacity: 0 }, { opacity: 1 })
      .fromTo('.partners__img', { opacity: 0, x: -100 }, { opacity: 1, x: 0, stagger: .15 })
      .to('.partners__offer-btn', { opacity: 1 });

    watchEffect(() => {
      if (skipAnimation.value) {
        about_tl.timeScale(3);
      }
    });

    return () => {
      window.removeEventListener('scroll');
    };
  }); 
</script>

<template>
  <div class="local">
    <LocalHeader title="О нас" />

    <div class="local__content">
      <CompanyInfo class="local__content-elem info-elem" />

      <div class="local__flex-wrapper">
        <CompanyAmbitions class="local__content-elem ambitions-elem"/>
        <CompanyPartners class="local__content-elem partners-elem" />
      </div>
    </div>
  </div>
</template>

<style>
  .local__content > * {
    margin-bottom: 1.5rem;
  }

    .local__flex-wrapper {
      display: flex;
      justify-content: space-between;
    }
</style>