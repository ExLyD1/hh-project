<template>
  <div class=" bg-myLightBlue">
    <div class="container-page">
      <div class="flex flex-col items-center pt-14 text-center type__info">
        <h1 class="font-bold opacity-80 text-5xl main_text">Какие сотрудники есть на grc.ua?</h1>
        <p class="text-lg pt-9">Не ждите откликов — найдите идеального сотрудника сами среди {{ resume_num }} резюме у {{ searcher_num }} соискателей</p>

        <div class=" pt-10 w-full flex flex-row gap-5 justify-center input_block">
          <input class="border border-myDarkBlackMoreOpXl rounded w-4/6 text-2xl pl-8 focus:border-myBlue focus:border-2 outline-none" placeholder="Поиск по резюме" type="text">
          <button class="text-white py-4 px-12 bg-myBlue rounded text-lg hover:opacity-80 butt">Найти сотрудника</button>
          <button class="text-white py-4 px-12 bg-myBlue rounded text-lg hover:opacity-80 hidden butt_qwe">
            <img class="w-6 h-6" src="@/assets/images/employer/search.png" alt="">
          </button>
        </div>

        <div class="pt-5 pb-14 flex items-center categories_container">
          <span class="pr-2">Часто ищут резюме:</span>
          <div class="flex flex-row gap-3 categories">
            <router-link to="/404" class="rounded bg-myVacCol2 type__jobs hover:bg-myVacCol22">Управляющий</router-link>
            <router-link to="/404" class="rounded bg-myVacCol4 type__jobs hover:bg-myVacCol42">Секретарь</router-link>
            <router-link to="/404" class="rounded bg-myVacCol6 type__jobs hover:bg-myVacCol62">Механик</router-link>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const resume_num = ref('72 030 700')
const searcher_num = ref('46 359 918');

</script>

<style scoped>
.type__info h1{
  width:600px;
}
.type__info p{
  width:500px;
}
.type__jobs{
  padding:3px
}
@media screen and (max-width:755px) {
  .input_block{
    margin:0px 10px;
    gap:10px;
    padding: 35px 10px 0px 10px;
  }
  .butt{
    display: none;
  }
  .butt_qwe{
    display: block;
    padding:15px 10px;
  }
  input{
    font-size: 18px;
  }
  .categories_container{
    flex-wrap: wrap;
    justify-content: center;
    gap:10px;
  }
  .type__info h1{
    font-size: 35px;
  }
  .type__info p{
    font-size: 16px;
  }
}
@media screen and (max-width:605px) {
  .type__info h1{
    width: 400px !important;
    font-size: 45px;
  }
  .type__info p{
    width:400px;
  }
}
@media screen and (max-width:415px) {
  .type__info h1{
    width: 310px !important;
    font-size: 38px;
  }
  .type__info p{
    width:310px;
    font-size: 17px;
  }
}
</style>