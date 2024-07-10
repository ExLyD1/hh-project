<template>
  <div class="container-page flex flex-row justify-between">
    <div class="professions">
      <h1 class="font-semibold text-2xl">Работа по профессиям в {{ userCity }}</h1>
      <div class="professions__choices flex flex-wrap flex-col h-72 gap-1 pt-3">
        <div v-for="(category, index) in jobCategories" :key="index">
          <div class=" pr-10">{{ category }}</div>
        </div>
      </div>
    </div>

    <div class="aside__platform flex flex-col gap-8">
      <div class="social__media w-52">
        <h1 class="font-semibold text-2xl pb-5">Вакансии в мессенджере</h1>
        <div class="social__media__holder">
          <SocialMediaButt class="media__el hover:bg-myDarkBlackOp mb-2 cursor-pointer">
            <template #social__media__img>
              <img src="../../assets/images/landing/icons8-vk.svg" alt="">
            </template>
            <template #social__media__name>Вконтакте</template>
          </SocialMediaButt>
          <SocialMediaButt class="media__el hover:bg-myDarkBlackOp mb-2 cursor-pointer">
            <template #social__media__img>
              <img src="../../assets/images/landing/icons8-telegram.svg" alt="">
            </template>
            <template #social__media__name>Telegram</template>
          </SocialMediaButt>
          <SocialMediaButt class="media__el hover:bg-myDarkBlackOp cursor-pointer">
            <template #social__media__img>
              <img src="../../assets/images/landing/icons8-viber.svg" alt="">
            </template>
            <template #social__media__name>Viber</template>
          </SocialMediaButt>
        </div>
      </div>

      <div class="flex flex-row justify-evenly">
        <div class="w-20 h-20 pl-3">
          <img src="../../assets/images/landing/icons8-qr-50.png" alt="">
        </div>
        <div class="qr__text w-44 text-myLightBlue">Чтобы подключить сервис на телефоне, наведите камеру на QR-код</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
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
</script>

<style scoped>

.professions__choices {
  font-size: 15px;
}
.qr__text{
  font-size: 13px;
  color: rgba(121, 121, 160, 1);
}
@media screen and (max-width:1250px) {
  .professions{
    padding-bottom:40px
  }
  .container-page{
    flex-wrap: wrap
  }
  .aside__platform{
    width: 100%;
    border-top: 2px solid rgba(161, 161, 170, .2);
    padding-top:40px;
    flex-direction: row;
    justify-content: space-between;
  }
  .social__media{
    width: auto;
    flex-direction: column;
  }
  .social__media__holder{
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    gap:20px;
    margin: 0;
  }
  .media__el{
    margin-bottom:0px;
  }
}
</style>
