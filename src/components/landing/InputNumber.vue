<template>
  <div class="container-page p-3">
    <div class="input__number__container flex flex-row">
      <div class="input__number__info flex flex-col gap-5 p-12 w-3/6">
        <img class="w-12" src="../../assets/images/basic/logo.png" alt="">
        <div class="bg-white rounded-2xl p-5 font-bold">
          <p>Напишите телефон, чтобы работодатели могли предложить вам работу</p>
        </div>
      </div>

      <div class="input__number__field flex flex-col gap-5 p-12 w-3/6">
        <div class="input__button__wrap flex flex-row gap-3">
          <input class="input outline-none border border-myDarkBlack focus:border-myBlue w-3/5 h-12 px-4 rounded-lg" placeholder="Номер телефона" type="text">
          <button class="whitespace-nowrap h-12 px-4 rounded-lg border bg-myBlue text-myWhite hover:bg-myLightBlue duration-300">Продолжить</button>
        </div>
        <div class=" text-sm">Нажимая «Продолжить», вы подтверждаете, что полностью принимаете условия <span class="input__license text-myBlue hover:">Соглашения об оказании услуг по содействию в трудоустройстве (оферта)</span> и ознакомились с <span class=" input__license text-myBlue">политикой конфиденциальности</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.input__number__info{
  background: radial-gradient(circle at top right, #e7f2ff 0, #fff 130%);
}
.input__license:hover{
  color:#AF16FA;
  cursor:pointer;
}
@media screen and (max-width:1000px) {
  .input__number__container{
    flex-wrap: wrap;
  }
  .input__number__info, .input__number__field{
    width: 100%;
  }
  .input__number__field div input {
    width:75%
  }
}
@media screen and (max-width:752px) {
  .input__number__info, .input__number__field{
    padding: 15px 12px 15px 12px;
  }
  .input__number__info img{
    width:35px;
  }
  .input__button__wrap{
    flex-wrap: wrap;
  }
  .input__button__wrap input, .input__button__wrap button {
    width:100% !important;
  }
}

</style>