<template>
  <div class="separator"></div>
  <div class="container-page p-3 pb-9">
    <div class="header__links flex flex-row flex-wrap justify-between gap-7">
      <div class="flex flex-col gap-3">
        <h1>HeadHunter</h1>
        <p v-for="(p,index) in pList1" :key="index">{{p.text}}</p>
      </div>
      <div class="flex flex-col gap-3">
        <h1>Соискателям</h1>
        <p v-for="(p,index) in pList2" :key="index">{{p.text}}</p>
        <h1 class="pt-5 newsAnd">Новости и статьи</h1>
        <p v-for="(p,index) in pList3" :key="index">{{p.text}}</p>
      </div>
      <div class="flex flex-col gap-3">
        <h1>Молодым специалистам</h1>
        <p v-for="(p,index) in pList4" :key="index">{{p.text}}</p>

        <h1 class="pt-5">Боты для уведомлений</h1>
        <div class="flex flex-row gap-6">
          <div class="bg-myDarkBlackMoreOp w-14 py-2 flex items-center justify-center rounded-lg">
            <img class="w-7" src="../../assets/images/landing/footer/icons8-telegram (1).svg" alt="">
          </div>
          <div class="bg-myDarkBlackMoreOp w-14 py-2 flex items-center justify-center rounded-lg">
            <img class="w-7" src="../../assets/images/landing/footer/icons8-viber (1).svg" alt="">
          </div>
          <div class="bg-myDarkBlackMoreOp w-14 py-2 flex items-center justify-center rounded-lg">
            <img class="w-7" src="../../assets/images/landing/footer/icons8-vk (1).svg" alt="">
          </div>
        </div>

        <h1 class="pt-5 mob">Мобильное приложение</h1>
        <div class="bg-myDarkBlackMoreOp w-28 p-2 flex items-center justify-center rounded-lg mob">
          <img class="w-full" src="../../assets/images/landing/icons8-qr-50.png" alt="">
        </div>
      </div>
    </div>


    <div class="header__add__info mt-14 ">
      <div class="flex flex-row gap-4 flex-wrap">
        <div v-for="(p,index) in pList5" :key="index" class="flex flew-row gap-4 ">
          <p class="pSep">{{p.text}}</p>
        </div>
      </div>

      <div class="pt-4 pb-5 text-myDarkBlackMoreOpXl header__add__infoqwe ">На информационном ресурсе hh.ru <span class="border-b border-myDarkBlackMoreOpXl hover:border-myDarkBlack hover:cursor-pointer hover:text-myDarkBlack">применяются рекомендательные технологии</span> (информационные технологии предоставления информации на основе сбора, систематизации и анализа сведений, относящихся к предпочтениям пользователей сети «Интернет», находящихся на территории Российской Федерации)
      </div>
    </div>


    <div class="header__last__items pt-4">
      <div class="separator pb-4"></div>
      <div class="flex flex-row justify-between header__last__itemsqwe">
        <div class="flex flex-row gap-5 flex-wrap">
          <div class="flex flex-row items-center justify-center">© 2024 ООО «Хэдхантер»</div>
          <div class="flex flex-row gap-4 items-center justify-center flex-wrap">
            <p>Switch to English</p> 
            <img class="w-6" src="../../assets/images/landing/footer/icons8-great-britain-48.png" alt="">
          </div>
        </div>
        
        <div class="flex flex-row gap-10 items-center justify-center header__last__itemqwe12">
          <img class="w-8" src="../../assets/images/landing/footer/icons8-telegram (1).svg" alt="">
          <img class="w-8" src="../../assets/images/landing/footer/icons8-vk (1).svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const pList1 = ref([
  { text : 'Поиск сотрудников'},  
  { text : 'О компании'},  
  { text : 'Помощь'},  
  { text : 'Наши вакансии'},  
  { text : 'Реклама на сайте'},  
  { text : 'Требования к ПО'},  
  { text : 'Безопасный HeadHunter'},  
  { text : 'HeadHunter API'},  
  { text : 'Партнерам'},  
  { text : 'Инвесторам'},  
  { text : 'Каталог компаний'},  
  { text : 'Работа по профессиям'},  
  { text : 'Работа рядом с метро'},
]);

const pList2 = ref([
  { text : 'Готовое резюме'},  
  { text : 'Все сервисы'},  
  { text : 'Профориентация'},  
  { text : 'Продвижение резюме'},  
  { text : 'Хочу у вас работать'},  
  { text : 'Производственный календарь'},  
  { text : 'Экспертная рекомендация'},
]);

const pList3 = ref([
  { text : 'Рынок труда'},  
  { text : 'Жизнь в компании'},  
  { text : 'ИТ-проекты'},  
  { text : 'Рейтинг работодателей России'},  
]);

const pList4 = ref([
  { text : 'Карьера для молодых специалистов'},  
  { text : 'Школа программистов'},  
  { text : 'Карьера в некоммерческих организациях'},  
]);

const pList5 = ref([
  { text : 'Этика и комплаенс'},  
  { text : 'Использование сайтов'},  
  { text : 'Защита персональных данных'}, 
  { text : 'Пользовательское соглашение'},   
]);
</script>

<style scoped>
.separator {
  border-top: 2px solid rgba(161, 161, 170, .2);
  padding-top: 20px;
}

.header__links p {
  color: rgba(161, 161, 170, 1);
}

.header__links h1 {
  margin-top: 20px;
}

* {
  font-size: 17px;
}
.pSep{
  font-size: 16px;
  color: rgba(161, 161, 170, 1);
}
.pSep::before {
  background-color: rgba(161, 161, 170, 1);
  border-radius: 100%;
  content: "";
  height: 2px; 
  width: 2px; 
  display: inline-block; 
  margin-right: 10px; 
  margin-bottom: 4px;
}
.header__add__infoqwe , .header__add__infoqwe span{
  font-size: 15px;
}
.header__last__items div{
  font-size: 16px;
}
@media screen and (max-width: 752px) {
  .mob {
    display: none;
  }
  .header__last__itemsqwe{
    flex-direction: column-reverse;
  }
  .header__last__itemqwe12{
    align-items: start;
    justify-content: start;
    margin-bottom:20px
  }
}
</style>
