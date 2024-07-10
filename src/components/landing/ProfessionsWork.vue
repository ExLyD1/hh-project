<template>
  <div class="container-page flex flex-col md:flex-row justify-between">
    <div class="professions">
      <h1 class="font-semibold text-2xl">Работа по профессиям в {{ userCity }}</h1>
      <div class="professions__choices grid grid-cols-3 gap-2 pt-3">
        <div v-for="(category, index) in jobCategories" :key="index">
          <div class="category__block">{{ category }}</div>
        </div>
      </div>
    </div>

    <div class="social__media w-56 flex flex-col gap-8">

      <h1 class="font-semibold text-2xl">Вакансии в мессенджере</h1>
      <div class="social__media__content">

        <div class="social__media__holder">
          <SocialMediaButt class="media__el hover:bg-myDarkBlackOp mb-2 cursor-pointer">
            <template #social__media__img>
              <img src="../../assets/images/landing/icons8-vk.svg" alt="">
            </template>
            <template #social__media__name><span class="media__name">Вконтакте</span></template>
          </SocialMediaButt>
          <SocialMediaButt class="media__el hover:bg-myDarkBlackOp mb-2 cursor-pointer">
            <template #social__media__img>
              <img src="../../assets/images/landing/icons8-telegram.svg" alt="">
            </template>
            <template #social__media__name><span class="media__name">Telegram</span></template>
          </SocialMediaButt>
          <SocialMediaButt class="media__el hover:bg-myDarkBlackOp cursor-pointer">
            <template #social__media__img>
              <img src="../../assets/images/landing/icons8-viber.svg" alt="">
            </template>
            <template #social__media__name><span class="media__name">Viber</span></template>
          </SocialMediaButt>
        </div>

        <div class="qr flex flex-row justify-evenly pt-6 items-center">
          <div class="qr__img w-20">
            <img src="../../assets/images/landing/icons8-qr-50.png" alt="">
          </div>
          <div class="qr__text w-40">Чтобы подключить сервис на телефоне, наведите камеру на QR-код</div>
        </div>

      </div>

      
    </div>

    <div class="professions__adaptive hidden flex-col">
      <h1 class="font-semibold text-xl pb-5">Работа по профессиям в {{ userCity }}</h1>
      <div 
        v-for="(category, index) in displayedCategories" 
        :key="index" 
        class="professions__adaptive__card flex flex-row justify-between items-center h-10 border-b border-myDarkBlackOp gap-4 "
      >
        <div>{{ category }}</div>
        <div class="flex flex-row gap-3">
          <p>123</p>
          <img class="h-6 w-6 rotate-180" src="../../assets/images/landing/icons8-back-50.png" alt="">
        </div>
      </div>
      <div @click="showCategories" v-if="isMoreCategories" class="pt-5 pb-6">
        <span class="border-b border-myDarkBlue text-myDarkBlue border-dashed cursor-pointer text-left ">
          Смотреть все профессии
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue';
import SocialMediaButt from './SocialMediaButt';

const props = defineProps({
  userCity: {
    type: String,
    required: true
  }
});

const jobCategories = ref([
  'Автомобильный бизнес',
  'Административный персонал',
  'Безопасность',
  'Высший и средний менеджмент',
  'Добыча сырья',
  'Домашний, обслуживающий персонал',
  'Закупки',
  'Информационные технологии',
  'Искусство, развлечения, массмедиа',
  'Маркетинг, реклама, PR',
  'Медицина, фармацевтика',
  'Наука, образование',
  'Продажи, обслуживание клиентов',
  'Производство, сервисное обслуживание',
  'Рабочий персонал',
  'Розничная торговля',
  'Сельское хозяйство',
  'Спортивные клубы, фитнес, салоны красоты',
  'Стратегия, инвестиции, консалтинг',
  'Страхование',
  'Строительство, недвижимость',
  'Транспорт, логистика, перевозки',
  'Туризм, гостиницы, рестораны',
  'Управление персоналом, тренинги',
  'Финансы, бухгалтерия',
  'Юристы',
  'Другое',
]);


const isMoreCategories = ref(false);


if (jobCategories.value.length >= 10) {
  isMoreCategories.value = true;
}
const displayedCategories = ref(jobCategories.value.slice(0, 10));

const showCategories = () => {
  displayedCategories.value = jobCategories.value
  isMoreCategories.value = false
};
</script>

<style scoped>
.professions__choices {
  font-size: 15px;
}

.qr__text{
  font-size: 13px;
  color: rgba(121, 121, 160, 1);
}
.category__block{
  height:25px
}
@media screen and (max-width:1250px) {
  .professions{
    padding-bottom:40px
  }
  .category__block{
    white-space: nowrap;
  }
  .container-page{
    flex-wrap: wrap
  }
  .social__media{
    width: 100%;
    border-top: 2px solid rgba(161, 161, 170, .2);
    padding-top:20px;
    gap:10px;
  }
  .social__media__content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    height: 80px;
  }
  .social__media__holder{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap:15px;
  }
  .media__el{
    margin-bottom:0px;
    width:140px;
    height: 40px;
  }
  .qr{
    padding-top:0px;
  }
}
@media screen and (max-width:1000px) {
  .professions__choices{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

}
@media screen and (max-width:752px) {
  .qr{
    display: none;
  }
  .container-page{
    padding:0.75rem;
  }
}
@media screen and (max-width:610px) {
  .professions__adaptive{
    display: flex;
  }
  .professions{
    display: none;
  }
  .container-page{
    flex-direction: column-reverse;
  }
}
@media screen and (max-width:490px) {
  .media__name{
    display: none;
  }
  .social__media__content, .social__media__holder{
    width: 100%;
  }
  .media__el{
    padding: 0px;
    width: 30%;
    align-items: center;
    justify-content: center
  }
}
@media screen and (max-width:400px) {
  .professions__adaptive__card{
    height: 50px;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
  }
}
</style>
