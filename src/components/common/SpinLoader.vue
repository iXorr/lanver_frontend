<template>
  <div class="loader">
    <p class="loader__text">Немного подождите...</p>
    <span class="loader__icon"></span>
  </div>
</template>

<style scoped>
  .loader {
    width: fit-content;
    padding: 1rem;
    margin: 1rem 0;
    display: flex;
    align-items: center;
    animation: appear .25s;
  }

    .loader__text {
      width: 7.5rem;
    }

    .loader__icon {
      width: 3rem;
      height: 3rem;
      border: 0.5rem solid #FFF;
      border-bottom-color: #0386C8;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }

  @keyframes appear {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    
    100% {
      transform: rotate(360deg);
    }
  }   
</style>
