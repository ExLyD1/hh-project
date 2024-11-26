<template>
    <div class="bg-myLightBlue2">
        <div class="container-page">
            <div class="flex flex-col items-center mt-32 pt-20 full_container">
                <h1 class="text-center text-5xl font-bold opacity-80 mb-10 main_text w-[500px]">С чего начать поиск сотрудников?</h1>
                <!-- Контейнер блоков шагов -->
                <div class="flex flex-row justify-center gap-6 block1">
                    <!-- Первый шаг -->
                    <div class="flex flex-col gap-8 w-64 block_step">
                        <img class="h-28 w-28" src="@/assets/images/employer/num1.png" alt="">
                        <div class="flex flex-col gap-5 step_text">
                            <h1 class="font-medium text-2xl whitespace-nowrap">Зарегистрируйтесь</h1>
                            <p class=" from-neutral-400 text-lg">И получите доступ ко всем услугам hh.ru</p>
                        </div>
                    </div>



                    <div class="mt-32 img_next">
                        <img class="w-20" src="@/assets/images/employer/arrow.png" alt="">
                    </div>

                    <div class="img_bot hidden">
                        <img class="w-20" src="@/assets/images/employer/arrow_bot.png" alt="">
                    </div>




                    <!-- Второй шаг -->
                    <div class="flex flex-col gap-8 w-64 block_step">
                        <img class="h-28 w-28" src="@/assets/images/employer/num2.png" alt="">
                        <div class="flex flex-col gap-5 step_text ">
                            <h1 class="font-medium text-2xl whitespace-nowrap">Разместите вакансию</h1>
                            <p class=" from-neutral-400 text-lg">Получайте отклики с контактами соискателей</p>
                        </div>
                    </div>




                    <div class="mt-32 img_next">
                        <img class="w-20" src="@/assets/images/employer/arrow.png" alt="">
                    </div>

                    <div class="img_bot hidden">
                        <img class="w-20" src="@/assets/images/employer/arrow_bot.png" alt="">
                    </div>




                    <!-- Третий шаг -->
                    <div class="flex flex-col gap-8 w-64 block_step">
                        <img class="h-28 w-28" src="@/assets/images/employer/num3.png" alt="">
                        <div class="flex flex-col gap-5 step_text">
                            <h1 class="font-medium text-2xl whitespace-nowrap">Выбирайте лучших</h1>
                            <p class=" from-neutral-400 text-lg">Из тех, кто уже хочет у вас работать</p>
                        </div>
                    </div>
                    
                </div>
                <button class="px-10 py-4 bg-blue-500 text-white rounded mt-24 text-lg">Начать подбор на grc</button>
                <div class="flex flex-row items-center  mt-8 mb-24 gap-2 workers">
                    <img class="h-5 w-5 online_img" src="@/assets/images/employer/online.png" alt="">
                    <p><span class="font-medium">{{ company_num }} компаний</span> сейчас ищут сотрудников</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const company_num = ref('4405');
</script>

<style scoped>

.main_text{
    font-size: 45px;
}
@media screen and (max-width:1100px) {
    .img_next{
        display: none;
    }
    .block1{
        width:100%;
    }
}
@media screen and (max-width:1000px) {
    .block1{
        flex-direction: column;
        padding-left: 70px;
    }
    .block_step{
        flex-direction: row;
        gap: 0;
        align-items: center;
    }
    .step_text{
        gap:2px;
        white-space: nowrap;
        text-align: center;
    }
    button{
        margin-top:30px
    }
    .img_bot{
        display: flex;
        justify-content: center;
    }
}
@media screen and (max-width:755px) {
    .main_text{
        font-size:35px;
    }
}
@media screen and (max-width:620px) {
    .block1{
        padding-left: 0px;
        width:100%;
        align-items: center;
    }
    .block_step{
        justify-content: center;
        width:450px;
        margin: auto;
    }
    .step_text{
        text-align: left;
        white-space: normal;
    }
    .block_step img{
        width:70px;
        height: 70px;
    }
    
}
@media screen and (max-width:505px) {
    .step_text h1{
        font-size: 20px;
    }
    .step_text p{
        font-size: 16px !important;
    }
    .main_text{
        width: 310px;
    }
}

@media screen and (max-width:455px) {
    .block_step{
        width:400px;
    }
    .step_text p{
        width:250px
    }
}
@media screen and (max-width:405px) {
    .block_step{
        width:310px;
    }
}
@media screen and (max-width:350px) {
    .online_img{
        display: none;
    }
}
</style>