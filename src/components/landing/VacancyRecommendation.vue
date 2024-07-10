<template>
  <div class="container-page mb-44">
    <div class="vacancy__card__wrapper p-3">
      <vacancy-card
        v-for="(vacancy, index) in displayedVacancies" 
        :key="index"
        :class="vacancy.bg_color"
        class="bg__white vacancy-card"
      >
        <template v-slot:vacancy__name>{{ vacancy.name }}</template>
        <template v-slot:vacancy__salary>{{ vacancy.salary }}</template>
        <template v-slot:vacancy__quantity>{{ vacancy.quantity }}</template>
      </vacancy-card>
      
      <div @click="showVacancies" v-if="isMoreProfessions">
        <span class="border-b border-myDarkBlue text-myDarkBlue border-dashed cursor-pointer block text-left ">
          Ещё {{ remaining__profs__num }} {{ remaining__profs__word }}
        </span>
      </div>
    </div>

    <swiper
      class="swiper__wrapper hidden p-3"
      :slides-per-view="1.9"
      :breakpoints="breakpoints"
      navigation
      :pagination="{ clickable: true }"
    >
      <swiper-slide 
        v-for="(vacancy, index) in vacancies__list" 
        :key="index"
        class="slide"
      >
        <vacancy-card class="bg-myLightPurple bg__white vacancy-card">
          <template v-slot:vacancy__name>{{ vacancy.name }}</template>
          <template v-slot:vacancy__salary>{{ vacancy.salary }}</template>
          <template v-slot:vacancy__quantity>{{ vacancy.quantity }}</template>
        </vacancy-card>
      </swiper-slide> 
    </swiper>
  </div>
</template>


<script setup>
import VacancyCard from './VacancyCard.vue';
import { ref, onMounted } from 'vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';


const remaining__profs__num = ref(0);
const isMoreProfessions = ref(false);
const remaining__profs__word = ref(null)
const breakpoints = ref({
  480: {
    spaceBetween: 40,
  },
  395: {
    spaceBetween: 120,
  },
  0: {
    spaceBetween: 160,
  }
})
const vacancies__list = ref([
  { name: 'Администратор', salary: '', quantity: '1 вакансия', bg_color: 'bg-myVacCol1' },
  { name: 'Программист', salary: '100 000 - 200 000 ₽', quantity: '3 вакансии', bg_color: 'bg-myVacCol2' },
  { name: 'Менеджер', salary: '35 000 – 70 000 ₽', quantity: '4 вакансии', bg_color: 'bg-myVacCol3' },
  { name: 'Специалист', salary: '', quantity: '2 вакансии', bg_color: 'bg-myVacCol4' },
  { name: 'Руководитель', salary: '35 000 – 65 000 ₽', quantity: '4 вакансии', bg_color: 'bg-myVacCol5' },
  { name: 'Инженер', salary: '', quantity: '1 вакансия', bg_color: 'bg-myVacCol6' },
  { name: 'Директор', salary: '35 000 – 65 000 ₽', quantity: '4 вакансии', bg_color: 'bg-myVacCol7' },
  { name: 'Дизайнер', salary: '85 000 – 435 000 ₽', quantity: '2 вакансии', bg_color: 'bg-myVacCol8' },
  { name: 'Повар', salary: '55 000 – 100 000 ₽', quantity: '1 вакансия', bg_color: 'bg-myVacCol9' },
  { name: 'Механик', salary: '', quantity: '2 вакансии', bg_color: 'bg-myVacCol2' },
  { name: 'Промоутер', salary: '', quantity: '1 вакансия', bg_color: 'bg-myVacCol5' },
  { name: 'Строительство', salary: '65 000 - 90 000 ₽', quantity: '3 вакансии', bg_color: 'bg-myVacCol1' },
  { name: 'Репетитор', salary: '', quantity: '2 вакансии', bg_color: 'bg-myVacCol7' },
]);


const getLastNum = (num) => {
  return num % 10;
}
if (vacancies__list.value.length >= 13) {
  isMoreProfessions.value = true;
  remaining__profs__num.value = vacancies__list.value.length - 12;
}
const displayedVacancies = ref(vacancies__list.value.slice(0, 12));

const showVacancies = () => {
  displayedVacancies.value = vacancies__list.value
  isMoreProfessions.value = false
}


if ( remaining__profs__num.value > 10 & remaining__profs__num.value < 20 ) {
  remaining__profs__word.value = 'вакансий'
} else if ( getLastNum(remaining__profs__num.value) === 1 ) {
  remaining__profs__word.value = 'вакансия'
} else if ( getLastNum(remaining__profs__num.value) <= 4 ) {
  remaining__profs__word.value = 'вакансии'
} else if ( getLastNum(remaining__profs__num.value) <= 9 ) {
  remaining__profs__word.value = 'вакансий'
} else if ( getLastNum(remaining__profs__num.value) === 0 ) {
  remaining__profs__word.value = 'вакансий'
}
</script>



<style scoped>
.vacancy__card__wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 40px;
  justify-items: center;
  align-items: start;
}

.bg__white {
  background-color: white !important;
}

@media screen and (max-width: 610px) {
  .swiper__wrapper {
    display: block !important;
  }
  .vacancy__card__wrapper {
    display: none !important;
  }
  .container-page{
    margin-bottom:70px;
  }
}

@media screen and (max-width: 520px) {
  .vacancy-card {
    width: 250px;
  }
}

@media screen and (max-width: 360px) {
  .vacancy-card {
    width: 230px;
  }
}
</style>
