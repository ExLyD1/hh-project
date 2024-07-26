<template>
  <div class=" bg-myLightBlue">
    <div class="container-page">
      <div class="flex flex-col items-center pt-14 text-center type__info">
        <h1 class="font-bold opacity-80 text-6xl">Какие сотрудники есть на grc.ru?</h1>
        <p class="text-lg pt-9">Не ждите откликов — найдите идеального сотрудника сами среди 72 030 700 резюме у 46 359 918 соискателей</p>
        <div class=" pt-10 w-full flex flex-row gap-5 justify-center">
          <input class="border border-myDarkBlackMoreOpXl rounded w-4/6 text-2xl pl-8 focus:border-myBlue focus:border-2 outline-none" placeholder="Поиск по резюме" type="text">
          <button class="text-white py-4 px-12 bg-myBlue rounded text-lg hover:opacity-80">Найти сотрудника</button>
        </div>
        <div class="pt-5 pb-14 flex items-center">
          <span class="pr-6">Часто ищут резюме:</span>
          <div class="flex flex-row gap-3">
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
</style>