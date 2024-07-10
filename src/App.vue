<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
*{
  margin: 0px;
  padding:0px;
}
.container-page{
  width:1200px;
  margin: auto;
}
@media screen and (max-width:1250px) {
  .container-page{
    width:900px
  }
}
@media screen and (max-width:1000px) {
  .container-page{
    width:700px
  }
}
@media screen and (max-width:752px) {
  .container-page{
    width:100%;
  }
}
</style>