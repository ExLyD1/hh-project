<template>
  <div class="container w-3/6 m-auto flex items-center flex-col">
    <div class="flex flex-col items-center text-center">
      <div class="h1404 text-9xl font-semibold">404</div>
      <div class="font-bold text-2xl pt-20">Page not found</div>
      <div class="pt-4 font-bold textJust">Oops! The page you are looking for does not exist. We are still working now!</div>
    </div>
    <router-link 
      to="/" 
      class="flex flex-row py-4 px-7 gap-3 items-center mt-12 button_hold"
      >
      <div class="font-semibold text-myWhite">Back to home</div>
      <img class="w-3 h-3 mt-1" src="../assets/images/404/&.svg" alt="">
    </router-link>

  </div>
</template>

<script setup>

</script>

<style scoped>
.container{
  margin-top:200px;
}
.h1404{
  color:#136AFB !important;
}
.container div div {
  color: #201F1F;
  white-space: nowrap;
}
.button_hold{
  background-color: #201F1F;
}
@media screen and (max-width:660px) {
  .container{
    width: 100%;

  }
  .container div div{
    white-space: wrap;
  }
  .textJust{
    padding: 16px 15px 0px 15px;
  }
}
</style>