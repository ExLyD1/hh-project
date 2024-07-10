<template>
  <div class="input_block-container">
    <div class="input_block_items flex flex-row items-center gap-4 pt-8">
      <input class="w-3/5 h-12 px-4 rounded-lg input-field " type="text" placeholder="Профессия, должность...">
      <button class="whitespace-nowrap h-12 px-4 rounded-lg border bg-myBlue text-myWhite hover:bg-myLightBlue duration-300">Найти работу</button>
      <button class="input_filter_button ml-4 h-12 px-2 rounded-lg border bg-myWhite tooltip">
        <img src="../../assets/images/landing/filter.png" alt="">
        <div class="tooltiptext">Расширенный поиск</div>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InputBlock'
  }
</script>

<style scoped>
.input-field{
  outline: none;
}
.tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.tooltip .tooltiptext {
  visibility: hidden;
  width: 200px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 120%;
  left: 50%;
  margin-left: -100px;
  opacity: 0;
  transition: opacity 0.3s;
}
.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #333 transparent; /* Треугольник */
}
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

@media screen and (max-width:752px) {
  .input_filter_button{
    display: none;
  }
  .input_block_items{
    padding-top:10px;
    width: 100%;
    justify-content: space-between;
  }
  .input_block_items input{
    width:75%;
  }

}
@media screen and (max-width:410px) {
  .input_block_items{
    flex-wrap: wrap;
  }
  .input_block_items input{
    width: 100%;
  }
}
</style>