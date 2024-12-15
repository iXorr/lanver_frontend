<script setup>
  import { ref, defineExpose } from 'vue';

  const modal = ref(null);
  const isFormSubmited = ref(false);

  function sendData() {
    isFormSubmited.value = true;
  }

  function showModal() {
    if (modal.value) {
      modal.value.showModal();
    }
  }

  defineExpose({ showModal });
</script>

<template>
  <dialog ref="modal">
    <form method="dialog" @submit.prevent="sendData">
      <div class="flash-message" v-if="isFormSubmited">
        <p>Благодарим вас за обратную связь, {{ user_name }}!</p>
        <p>Наши менеджеры свяжутся с вами в ближайшее время.</p>

        <button @click.prevent="modal.close()" class="flash-message__btn">Закрыть</button>
      </div>

      <div class="modal__fields" v-if="!isFormSubmited">
        <h1>Введите ваши данные</h1>

        <div class="field-elem">
          <input type="text" placeholder="Имя" v-model="user_name" required id="name">
          <label for="name">Имя</label>
        </div>

        <div class="field-elem">
          <input type="email" placeholder="Имя" v-model="user_email" required id="email">
          <label for="email">Почта</label>
        </div>

        <!-- <div class="field-elem">
          <input type="tel" placeholder="Телефон" v-model="user_tel" required id="tel">
          <label for="tel">Номер телефона</label>
        </div> -->

        <div class="submits">
          <input type="submit" value="Отправить">
          <button @click.prevent="modal.close()">Закрыть</button>
        </div>
      </div>
    </form>
  </dialog>
</template>

<style scoped>
  .field-elem {
    position: relative;
    margin-bottom: 1rem;
  }

  .field-elem input {
    width: 100%;
    border: 1px solid #999;
    padding: 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
  }

  .field-elem label {
    border-radius: 0.5rem;
    background: white;
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
    transition: 0.2s ease all;
    color: #aaa;
  }

  .field-elem input:focus + label,
  .field-elem input:not(:placeholder-shown) + label {
    top: -0.75rem;
    left: 0.5rem;
    font-size: 0.75rem;
  }

  .field-elem input::placeholder {
    color: white;
  }


  .flash-message {
    text-align: center;
    width: 15rem;
  }

    .flash-message > * {
      margin-bottom: 1rem;
    }

    .flash-message > *:last-child {
      margin-bottom: 0;
    }

    .flash-message button {
      margin: 0 auto;
    }

  dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #ccc;
    border-radius: 1rem;
    padding: 1.5rem 1rem;
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); 

    &[open] {
      animation: open .75s forwards;
    }
  }

  dialog::backdrop{
    background: rgba(0,0,0,0.5);
  }

  dialog h1 {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  dialog input[type="submit"],
  dialog button {
    display: block;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    margin-bottom: 0.75rem;

    margin: 0;
    background: #0386C8;
    border: none;
    color: white;
  }

  .submits {
    display: flex;
  }

    .submits > *,
    .flash-message__btn {
      transition: var(--fast-transition);
    }

    .submits > *:first-child {
      margin-right: 1rem
    }

    .submits > *:hover,
    .flash-message__btn:hover {
      background: #055c88;
    }

  @keyframes open {
    from {
      top: 100%;
    }
  }
</style>