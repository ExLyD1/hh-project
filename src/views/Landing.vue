<template>
  <Header/>
  <div class="landing-container h-full w-full">
    <div class="container-page p-3">
      <under-header class="pt-10"></under-header>
      <div class="input-landing-field pt-28 pl-60">
        <h1 class="text-4xl font-semibold">Выбирай среди ведущих работодателей</h1>
        <p class="in__searching__job hidden">
          Поиск работы в 
          <router-link
              to="/404"
              class="border-b border-dashed border-black"
              exact-active-class=""
            > 
              России
            </router-link>
        </p>
        <input-block :user-city="userCity"></input-block>
        <div>
          <router-link
            to="/404"
            class="in__searching__employee text-myDark border-b border-myDark pt-8 inline-block hover:text-myPurple hover:border-myPurple"
          >
            Я ищу сотрудника
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <input-number class="mt-10"></input-number>
  <vacancy-recommendation class="mt-12" :user-city="userCity"></vacancy-recommendation>
  <professions-work class="mt-12 mb-96" :user-city="userCity"></professions-work>
</template>

<script setup>
import UnderHeader from '@/components/basicComponents/UnderHeader.vue'
import Header from '../components/basicComponents/Header.vue'
import InputBlock from '@/components/basicComponents/InputBlock.vue'
import InputNumber from '../components/landing/InputNumber.vue'
import VacancyRecommendation from '../components/landing/VacancyRecommendation.vue'
import ProfessionsWork from '@/components/landing/ProfessionsWork.vue'

const userCity = 'Москвe';
</script>

<style scoped>
.landing-container{
  background-image:url('../assets/images/landing/gge.jpg');
  background-repeat: no-repeat; 
  background-position-x: right;
  background-size: cover;
  width: 100%;
  padding-bottom:70px
}
@media screen and (max-width:1000px) {
  .input-landing-field{
    padding-left:0px;
  }
}
@media screen and (max-width:752px) {
  .in__searching{
    display: block;
    font-size: 17px;
  }
  .input-landing-field{
    padding-top:40px;
  }
  .input-landing-field h1, .in__searching__employee{
    display: none;
  }
  .in__searching__job{
    display: block;
  }
}
</style>
