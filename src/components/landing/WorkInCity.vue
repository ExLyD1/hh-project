<template>
  <div class="container-page p-3">
    <div class="work__in__city">
      <h1 class="pb-2 text-2xl font-semibold">Работа в {{ userCity }}</h1>
      <div class="pb-4">
          <p v-for="(p, index) in displayedTextList" :key="index" class="pt-3">{{ p.text }}</p>
      </div>
      <span v-if="!isMoreText" @click="showTextList" class="cursor-pointer text-myBlue border-b border-dashed border-myBlue">Показать полностью</span>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMoreText = ref(false)
const textList = ref([
  {text : 'Работа составляет большую часть жизни почти каждого из нас. Но ничто не вечно: случается, что однажды приходится менять место работы и с головой погружаться в поиски вакансий — хочется ведь найти хорошую альтернативу текущей должности.'},

  {text : 'Однако зачастую при смене работы мы задумываемся не только о смене компании, но и об изменении профессиональной деятельности. И именно в эти моменты возникает вопрос: «Как теперь найти хорошую работу в Москве? А главное, какой должна быть эта работа?»'},

  {text : 'Чтобы решать такие вопросы легко и быстро, достаточно всего лишь зайти на hh.ru!'},

  {text : 'На нашем сайте вы всегда можете узнать последние новости рынка труда, а также изучить свежий обзор зарплат, с помощью которого легко оценить, на какие должности стоит нацелиться. Если вы уже определились, вакансии каких специальностей вас интересуют, вам остаётся только создать резюме и приступать к поиску работы мечты!'},

  {text : 'Удобнее всего искать работу с помощью нашего каталога вакансий: всего пару раз кликнув мышкой, вы получите список актуальных и качественных вакансий в Москве или другом регионе России. Но это не единственный вариант поиска работы. На нашем сайте вы можете создать привлекательное резюме, и вакансии сами начнут стекаться к вам! А скомбинировав оба эти метода, вы сможете получить наиболее быстрый, а главное, эффективный способ поиска работы!'},
])

const displayedTextList = ref(textList.value.slice(0,2))

const showTextList = () => {
  displayedTextList.value = textList.value
  isMoreText.value = true
}

const props = defineProps({
  userCity: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.work__in__city{
  border-top: 2px solid rgba(161, 161, 170, .2);
  padding-top:20px;
  
}
.work__in__city p {
  font-size: 14.5px;
}
</style>