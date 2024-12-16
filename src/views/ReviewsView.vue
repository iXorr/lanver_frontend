<script setup>
  import LocalHeader from '@/components/common/LocalHeader.vue';

  import { ref, computed, onMounted, watchEffect} from 'vue';
  import gsap from 'gsap';

  const reviews = ref([
    { id: 1, name: 'Алексей', comment: 'Отличный сервис!', date: '11.01.2023' },
    { id: 2, name: 'Мария', comment: 'Очень доволен покупкой.', date: '12.01.2023' },
    { id: 3, name: 'Иван', comment: 'Качество на высоте!', date: '12.01.2023' },
    { id: 4, name: 'Светлана', comment: 'Рекомендую всем!', date: '12.01.2023' },
    { id: 5, name: 'Дмитрий', comment: 'Все прошло отлично!', date: '13.01.2023' },
    { id: 6, name: 'Елена', comment: 'Невероятно удобно!', date: '15.01.2023' },
    { id: 7, name: 'Олег', comment: 'Супер!', date: '05.07.2023' },
  ]);

  const newName = ref('');
  const newComment = ref('');
  const currentPage = ref(1);
  const reviewsPerPage = 2;

  const totalPages = computed(() => Math.ceil(reviews.value.length / reviewsPerPage));

  const paginatedReviews = computed(() => {
    const start = (currentPage.value - 1) * reviewsPerPage;
    return reviews.value.slice(start, start + reviewsPerPage);
  });

  const addReview = () => {
    if (newName.value && newComment.value) {
      const newReview = {
        id: reviews.value.length + 1,
        name: newName.value,
        comment: newComment.value,
        date: new Date().toLocaleDateString(),
      };
      reviews.value.push(newReview);
      newName.value = '';
      newComment.value = '';
      // Обновляем количество страниц при добавлении нового отзыва
      currentPage.value = totalPages.value; // Переключаемся на последнюю страницу
    }
  };

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  };

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  };

  const skipAnimation = ref(false);

  onMounted(() => {
    window.addEventListener('scroll', () => skipAnimation.value = true);

    const reviews_tl = gsap
      .timeline()
      .fromTo('.feedback', { opacity: 0 }, { opacity: 1 })
      .fromTo('.feedback-content', { opacity: 0 }, { opacity: 1 })
      .fromTo('.feedback-item', { opacity: 0 }, { opacity: 1, stagger: .25 })
      .fromTo('.feedback-form', { opacity: 0, x: -25 }, { opacity: 1, x: 0 });

    watchEffect(() => {
      if (skipAnimation.value) {
        reviews_tl.timeScale(3);
      }
    });

    return () => {
      window.removeEventListener('scroll');
    };
  }); 
</script>

<template>
  <div class="feedback-root">
    <LocalHeader title="Отзывы" />

    <div class="feedback">
      <div class="feedback-content">
        <transition-group name="truefade" tag="div" class="feedback-list">

          <div
          v-for="(review, index) in paginatedReviews"
          :key="review.id"
          class="feedback-item">
         
            <div class="feedback-item__main">
              <h3>{{ review.name }}</h3>
              <p>{{ review.comment }}</p>
            </div>

            <small>{{ review.date }}</small>
          </div>
        </transition-group>

        <div class="pagination">
          <button @click="prevPage" :disabled="currentPage === 1">➤</button>
          <span>Страница {{ currentPage }} из {{ totalPages }}</span>
          <button @click="nextPage" :disabled="currentPage === totalPages">➤</button>
        </div>
      </div>

      <form @submit.prevent="addReview" class="feedback-form">
        <h1>Оставить свой</h1>

        <input v-model="newName" placeholder="Ваше имя" required />
        <textarea v-model="newComment" placeholder="Ваш отзыв" required></textarea>
        <button type="submit">Отправить</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.feedback {
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 2rem;
}

.feedback-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  height: 22rem;
  padding: 1rem;
  border: 1px solid #fff;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1rem);
}

.feedback-list {
  overflow: hidden;
  display: grid;
  gap: 1rem;

  width: 100%;
}

.feedback-item {
  border: 1px solid #fff;
  border-radius: .5rem;
  padding: 1rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  height: 7.35rem;
}

.feedback-item__main {
  overflow: hidden;
}

.feedback-item__main h3 {
  margin-bottom: 0.5rem;
}

.feedback-item__main * {
  max-width: 27rem;
  word-wrap: break-word;
  white-space: normal;
}

.feedback-form {
  width: 25rem;
  display: flex;
  flex-direction: column;
}

.feedback-form input,
.feedback-form textarea {
  font-size: 1rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.feedback-form textarea {
  resize: none;
  height: 10rem;
}

.feedback-form button {
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: #0386C8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: var(--fast-transition);
}

.feedback-form button:hover {
  background-color: #0164A4;
}

.pagination {
  padding-top: 1rem;
  border-top: 1px solid #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pagination > *:first-child {
  transform: scaleX(-1);
}

.pagination button {
  cursor: pointer;
  background: none;
  font-size: 1rem;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #fff;
  transition: var(--fast-transition);
  font-weight: 600;
}

.pagination button:hover {
  background: #fff;
  color: #000;
}

.pagination button[disabled]:hover {
  background: rgba(0, 0, 0, 0.25);
  color: #999;
}

.truefade-enter-active {
  animation: truefade .5s;
}

.truefade-leave-active {
  animation: truefade .35s reverse;
}

@keyframes truefade {
  from {
    opacity: 0;
    transform: scale(0.95);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

</style>