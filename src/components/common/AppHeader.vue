<script setup>
  import Navbar from '@/components/ui/Navbar.vue';
  import RewindIcon from '@/components/icons/RewindIcon.vue';
</script>

<template>
  <header class="app-header">
    <div class="branding">
      <img src="/public/img/logo.png" alt="logo">
      <p>ЛАНВЕР</p>
    </div>

    <p style="color: white; margin-right: 2rem;">{{ areAnimationsSkipped }}</p>

    <Navbar />
    <RewindIcon class="rewind-animation-btn" @click="$emit('skipAnimations')" onclick="this.classList.toggle('active')" />
  </header>
</template>

<style scoped>
  .app-header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1.5rem;
    margin-bottom: 2.5rem;
  }

    .branding {
      display: flex;
      align-items: center;
      color: #fff;
      font-weight: 600;
      letter-spacing: 2.5px;

      margin-right: 3rem;
      user-select: none
    }
    
      .branding img {
        width: 2.5rem;
        height: 1.75rem;
        margin-right: 0.85rem;
      }

      .branding p {
        font-size: 1rem;
      }

      .rewind-animation-btn {
        width: 2rem;
        height: 2rem;
        margin-left: 1.5rem;
        transition: var(--fast-transition);
        border: 1px solid #fff;
        border-radius: 0.5rem;
        padding: 0.25rem;
        cursor: pointer;
      }

      .rewind-animation-btn:active {
        transform: scale(1.15);
      }

      .active {
        background: white;
      }

      .active > * {
        stroke: black;
      }
</style>
