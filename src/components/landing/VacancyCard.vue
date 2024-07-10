<template>
  <div class="vacancy__card h-28">
    <div :class="$attrs.class" class="vacancy__decoration"></div>
    <div class="flex flex-col justify-between pl-3 ">
      <div class="pt-3 text-lg"><slot name="vacancy__name" ></slot></div>
      <div class="pb-1 text-sm"><slot name="vacancy__salary" ></slot></div>
      <div class="pt-4 pb-3 text-sm"><slot name="vacancy__quantity" ></slot></div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.vacancy__card {
  border: 1px solid rgba(161, 161, 170, 0.3);
  border-radius: 5px;
  width: 270px;
  padding-right: 1rem;
  display: flex;
  flex-direction: row;
}
.vacancy__decoration{
  width: 10px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
</style>

