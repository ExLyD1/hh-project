<template>
    <div class="bg-[#f4f6fb] p-3">
        <div class="container-page">
            <div class="flex flex-row justify-between pt-32 pb-24 container1">

                <!-- Первый блок -->
                <div class="flex flex-col w-[450px] block1">
                    <h1 class="text-6xl font-bold opacity-80 mb-10 main_text ">Почему стоит разместить вакансию на hh.ru?</h1>
                    <p class="mb-10 text-lg textSome">Вакансия — это объявление о поиске сотрудника. Опишите, кто нужен, и выбирайте лучших среди откликнувшихся.</p>
                    <button class="px-10 py-4 bg-blue-500 text-white rounded text-lg mb-5">Разместить вакансию</button>
                    <div class="flex flex-row">
                        <img class="w-5 h-5 mr-2" src="@/assets/images/employer/gift2.png" alt="">
                        <p> + до 15 подходящих резюме</p>
                        <p>в подарок</p>
                    </div>
                </div>


                <!-- Второй блок -->
                <div class="w-[530px] flex flex-col gap-16 block2">

                    <div class="flex flex-row gap-10 block2Item">
                        <img class="w-32 h-32" src="@/assets/images/employer/percents40.png" alt="">
                        <div class="flex flex-col gap-7">
                            <h1 class="text-2xl font-bold opacity-80">Вакансию увидит каждый второй соискатель</h1>
                            <p class="text-lg">40% трудоспособного населения России — зарегистрированы на hh.ru</p>
                        </div>
                    </div>

                    <div class="flex flex-row gap-10 block2Item">
                        <img class="w-32 h-32" src="@/assets/images/employer/percents90.png" alt="">
                        <div class="flex flex-col gap-7">
                            <h1 class="text-2xl font-bold opacity-80">Найдется сотрудник для любого бизнеса</h1>
                            <p class="text-lg">На 90% вакансий откликаются. На hh.ru самая активная аудитория</p>
                        </div>
                    </div>

    
                    <div class="flex flex-row gap-10 block2Item">
                        <img class="w-32 h-32" src="@/assets/images/employer/percents70.png" alt="">
                        <div class="flex flex-col gap-7">
                            <h1 class="text-2xl font-bold opacity-80">Откликнутся те, кто подходит именно вам</h1>
                            <p class="text-lg"> 70% работодателей находят сотрудников при помощи размещения вакансии</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
@media screen and (max-width:1005px) {
    .container1{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
        width: 650px;
    }
    .block1{
        width:600px;
        margin-bottom: 100px;
    }
    .main_text{
        font-size: 35px;
    }
    .textSome{
        font-size: 18px;
    }
    button{
        width:400px
    }
    .block2{
        justify-content: space-between;
        width: 100%;
    }
}
@media screen and (max-width:660px) {
    .container1, .block1, .block2{
        width: 100%;
    }
    .block1{
        margin-bottom: 80px;
    }
    .textSome{
        font-size: 16px;
    }
    .block2 img {
        width: 60px;
        height: 60px;
    }
    .block2 h1{
        font-size:20px;
    }
    .block2 p{
        font-size:16px;
    }
    .block2{
        gap:30px
    }
    .block2Item{
        gap:20px
    }
    button{
        width:295px;
    }
}
</style>