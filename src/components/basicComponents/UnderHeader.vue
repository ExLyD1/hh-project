<template>
  <div class="underHeader-container flex flex-row justify-between items-center">
    <div class="flex flex-row items-center">
      <div class="hover:text-myDarkBlue">
        <router-link
          to="/"
          class="hoverLinkHeader"
          exact-active-class=""
        >
          <img class="w-5/12" src="../../assets/images/basic/logo.png" alt="">
        </router-link>
      </div>
      <div>
        <router-link
          to="/"
          class="helpBorder"
        >
          Помощь
        </router-link>
      </div>
    </div>

    <div class="flex flex-row items-center justify-between gap-6">
      <div>
        <router-link
          to="/"
          class="px-4 py-2 border rounded-full border-myLightPurple text-myPurple hover:border-myDarkPurple"
        >
          Создать резюме
        </router-link>
      </div>
      <div>
        <router-link
          to="/"
          class="px-4 py-2 border rounded-full border-myDarkBlack text-black hover:border-myDark"
        >
          Войти
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'UnderHeader'
  }
</script>

<style scoped>
.activeLinkHeader{
  border-bottom: 3px solid #AF16FA !important;
  padding-bottom: 20px !important;
}
.helpBorder{
  border-bottom: 1px dashed black;
}
.helpBorder:hover{
  border-bottom: 1px dashed #5369FA;
  color: #5369FA;
}
@media screen and (max-width:752px) {
  .underHeader-container{
    display: none;
  }
}
</style>