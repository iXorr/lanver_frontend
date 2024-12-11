<script setup>
  import { onMounted, ref } from 'vue';
  import { RouterLink, RouterView } from 'vue-router';
  import { useIntersectionObserver } from '@vueuse/core';

  import AnimatedWires from '@/components/AnimatedWires.vue';
  import SearchBar from '@/components/ui/SearchBar.vue';

  // пример использования инструмента для анимированного скролла
  const target = ref(null);
  const targetIsVisible = ref(false);

  const { stop } = useIntersectionObserver(
    target,
    ([entry], observerElement) => {
      targetIsVisible.value = entry?.isIntersecting || false;
    }
  );
</script>

<template>
  <AnimatedWires />

  <div class="root">
    <header>
      <h1>It's APP</h1>

      <div style="display: flex; justify-content: end; margin-right: 50px;">
        <Transition>
          <SearchBar />
        </Transition>
      </div>

      <p class="message">{{ targetIsVisible }}</p>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/tech-expert">Tech. expert</RouterLink>
        <RouterLink to="/codex">Codex</RouterLink>
      </nav>
    </header>

    <div ref="target">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
  .root {
    height: 2000px;
    font-size: 1rem;
  }

  .message {
    position: fixed;
    right: 150px;
    width: 250px;
    height: 100px;
    font-size: 36px;
    color: white;
    /* background: lightcyan; */
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 500px;
    height: 100px;
    margin: 25px;
    padding: 0 25px;
    background: lightcoral;
    border-radius: 15px;
  }

  nav > * {
    padding: 10px;
    border-radius: 10px;
    background-color: lightcyan;
    text-decoration: none;
    color: #000;

    transition: var(--fast-transition);
  }

  nav > *:active{
    transform: scale(1.15);
  }
</style>