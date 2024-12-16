<script setup>
  import { ref, watchEffect, computed } from 'vue';
  const selectedFilter = ref('all');

  const jobs = ref([
    { id: 1, title: "Frontend Developer", description: "Разработка интерфейсов", category: "it", salary: "75000 ₽" },
    { id: 2, title: "Менеджер по продажам", description: "Работа с клиентами", category: "clients", salary: "55000 ₽" },
    { id: 3, title: "Бизнес-аналитик", description: "Анализ бизнес-процессов", category: "business", salary: "65000 ₽" },
    { id: 4, title: "Backend Developer", description: "Разработка серверной части", category: "it", salary: "105000 ₽" },
    { id: 5, title: "Специалист по клиентам", description: "Техническая помощь клиентам", category: "clients", salary: "45000 ₽" }
  ]);

  const filteredJobs = computed(() => {
    if (selectedFilter.value == 'all') {
      return jobs.value;
    }

    return jobs.value.filter(job => job.category == selectedFilter.value);
  });

  const emit = defineEmits();

  const chooseFilter = () => {
    emit('select', selectedFilter.value);
  }

  const sendJobs = () => {
    emit('getJobs', filteredJobs.value);
  }

  watchEffect(() => {
    chooseFilter(selectedFilter);
    sendJobs(filteredJobs);
  });
</script>

<template>
  <form class="job-filter">
    <h1 class="job-filter__header">Направление</h1>

    <div class="job-filter__vars">
      <div class="job-filter__var">
        <input type="radio" id="all" value="all" v-model="selectedFilter" />
        <label for="all">Все</label>
      </div>

      <div class="job-filter__var">
        <input type="radio" id="it" value="it" v-model="selectedFilter" />
        <label for="it">Работа в IT</label>
      </div>

      <div class="job-filter__var">
        <input type="radio" id="business" value="business" v-model="selectedFilter" />
        <label for="business">Бизнес и процессы</label>
      </div>

      <div class="job-filter__var">
        <input type="radio" id="clients" value="clients" v-model="selectedFilter" />
        <label for="clients">Работа с клиентами</label>
      </div>
    </div>
  </form>
</template>

<style scoped>
.job-filter__header {
  font-size: 1.25rem;
  font-weight: 500;
}

.job-filter__vars {
  display: flex;
  flex-direction: column;
}

.job-filter__var {
  position: relative;
  margin-bottom: 1rem;
}

.job-filter__var input {
  position: absolute;
  opacity: 0;
}

.job-filter__var label {
  font-weight: 600;
  display: inline-block;
  padding: 10px 20px;
  border: 2px solid white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.job-filter__var input:checked + label {
  background-color: white;
  color: #000;
}
</style>
