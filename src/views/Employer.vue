<template>
  <Header class="underHeader__background"/>
  <div class="employer__background ">
    <img class="employer__backgroundImg1" src="../assets/images/employer/free-icon-id-card-1497759.png" alt="">
    <img class="employer__backgroundImg2" src="../assets/images/employer/free-icon-website-7904314.png" alt="">
    <img class="employer__backgroundImg3" src="../assets/images/employer/free-icon-abilities-3315335.png" alt="">
    <img class="employer__backgroundImg4" src="../assets/images/employer/free-icon-personal-information-4310268.png" alt="">
    <img class="employer__backgroundImg5" src="../assets/images/employer/magazine_1209206.png" alt="">
    <img class="employer__backgroundImg6" src="../assets/images/employer/free-icon-files-7400857.png" alt="">
    <div class="container-page">
      <under-header class="pt-10">
        <template #underHeader__slot__left><span class="pr-10">Прайс-лист</span></template>
        <template #underHeader__slot__right><span class="text-black underHeader__reg">Зарегистрироватся</span></template>
      </under-header>

      <div class="text-center flex flex-col items-center pt-24 employer__startInfo">
        <h1 class="font-semibold pb-5 text-5xl">Разместите вакансию на grc.ua</h1>
        <p>И находите сотрудников среди тех, кто хочет у вас работать. grc.ua — сервис №1 по поиску сотрудников в Украине*</p>
        <button class="text-white py-4 px-12 bg-myBlue rounded text-lg mt-12 mb-10">Разместить вакансию</button>
        <p class=" text-myDarkBlack w-2/4">* По посещаемости за 31 день среди сайтов по поиску работы и персонала, по данным SimilarWeb по UA на 01.07.2024 г.</p>
      </div>

    </div>
  </div>

  <employee-type class="mt-16"></employee-type>

  <search-type class="mt-32"></search-type>

  <first-steps class="mt-32"></first-steps>
  
  <work-benefits></work-benefits>

  <who-active></who-active>

  <employer-footer></employer-footer>
</template>

<script setup>
import Header from '@/components/basicComponents/Header.vue';
import EmployerFooter from '@/components/basicComponents/EmployerFooter.vue';
import UnderHeader from '@/components/basicComponents/UnderHeader.vue';
import EmployeeType from '@/components/employer/EmployeeType.vue';
import SearchType from '@/components/employer/SearchType.vue';
import FirstSteps from '@/components/employer/FirstSteps.vue';
import WorkBenefits from '@/components/employer/WorkBenefits.vue';
import WhoActive from '@/components/employer/WhoActive.vue';
</script>

<style scoped>
.underHeader__background{
  background-color: rgba(161, 161, 170, .6) !important;
}
.underHeader__reg{
  border:none !important;
}
.employer__background{
  display: flex;
}
.container-page{
  z-index: 999;
}





.employer__backgroundImg1{
  position: absolute;
  z-index: 1;
  width: 100px;
  top:240px;
  left:27%;
}
.employer__backgroundImg2{
  position: absolute;
  z-index: 1;
  width: 100px;
  top: 510px;
  left:25%;
}
.employer__backgroundImg5{
  position: absolute;
  z-index: 2;
  width: 200px;
  top: 330px;
  left:17%;
  border-radius:60px;
}





/* ----------------------------- */


.employer__backgroundImg6{
  position: absolute;
  z-index: 2;
  width: 200px;
  top: 330px;
  left:74%;
}
.employer__backgroundImg3{
  position: absolute;
  z-index: 1;
  width: 120px;
  top: 240px;
  left:70%;
}
.employer__backgroundImg4{
  position: absolute;
  z-index: 1;
  width: 120px;
  top: 510px;
  left:70%;
}




.employer__startInfo h1{
  width: 56%;
  font-size: 70px;
  font-weight: bold;
  opacity: 0.8;
}
.employer__startInfo p{
  width: 40%;
}
.employer__startInfo p:last-of-type{
  width: 50%;
}













@media screen and (max-width:1680px) {
  .employer__backgroundImg1{
    left:17%;
  }
  .employer__backgroundImg2{
    left:15%;
  }
  .employer__backgroundImg5{
    left:3%;
  }
  .employer__backgroundImg6{
    left:84%;
  }
  .employer__backgroundImg3, .employer__backgroundImg4{
    left:80%;
  }
}



@media screen and (max-width:1250px) {
  .employer__startInfo h1{
    font-size: 55px;
  }
  .employer__startInfo p{
    width: 40%;
  }
  .employer__startInfo p:last-of-type{
    width: 50%;
  }
  .employer__backgroundImg6{

    left:79%;
  }
  .employer__backgroundImg3,.employer__backgroundImg4{

    left:75%;
  }

}




@media screen and (max-width:960px) {
  .employer__startInfo h1{
    font-size: 45px;
    width:45%
  }

  .employer__backgroundImg6{
    left:74%;
  }
  .employer__backgroundImg3,.employer__backgroundImg4{

    left:71%;
  }
}




@media screen and (max-width:860px) {
  .employer__backgroundImg1{
    left:12%;
  }
  .employer__backgroundImg2{

    left:10%;
  }
  .employer__backgroundImg5{
    left:-2%;
  }
  .employer__backgroundImg6{
    left:76%;
    width:170px
  }
  .employer__backgroundImg3{
    left:73%;
  }
  .employer__backgroundImg4{
    left:78%
  }
}



@media screen and (max-width:752px) {
  .employer__backgroundImg1,
  .employer__backgroundImg2,
  .employer__backgroundImg3,
  .employer__backgroundImg4,
  .employer__backgroundImg5,
  .employer__backgroundImg6{
    display: none;
  }
  .employer__startInfo h1{
    font-size: 35px;
    width:270px
  }
  .employer__startInfo p{
    font-size: 16px;
    width:290px
  }
  .employer__startInfo{
    padding-top:50px
  }
  .employer__startInfo button{
    padding: 13px 30px;
    margin-top:35px;
    margin-bottom:18px;
  }
  .employer__startInfo p:last-of-type{
    font-size: 14px;
    width:300px
  }

}
</style>













