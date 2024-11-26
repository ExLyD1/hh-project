<template>
    <div class="bg-[#e7f2ff]">
        <div class="container-page">
            <div class="p-3 pt-32 pb-20 flex flex-row gap-20 container1">
                
                <div>
                    <img class="w-[550px]" src="@/assets/images/employer/chillGuy.jpg" alt="">
                </div>

                <div class="flex flex-col gap-5 block1">
                    <h1 class="text-6xl font-bold opacity-80 mb-3 main_text ">Кто будет откликаться?</h1>

                    <div class="flex flex-col gap-3">
                        <h1 class="text-2xl font-bold opacity-80">Кандидаты нам доверяют</h1>
                        <p class="text-lg">hh.ru занимает 1-е место в России среди сайтов по поиску работы и персонала</p>
                    </div>

                    <div class="flex flex-col gap-3">
                        <h1 class="text-2xl font-bold opacity-80">Ваш кандидат уже здесь</h1>
                        <p class="text-lg">≈ 76.1 млн резюме размещено на сервисе. Больше миллиона посетителей на hh.ru каждый день</p>
                    </div>

                    <div class="flex flex-col gap-3">
                        <h1 class="text-2xl font-bold opacity-80">Качественные и проверенные кандидаты</h1>
                        <p class="text-lg">Свыше 75% пользователей на сервисе с подтвержденными телефонными номерами</p>
                    </div>

                    <div class="flex flex-col gap-3">
                        <h1 class="text-2xl font-bold opacity-80">Активные и заинтересованные кандидаты</h1>
                        <p class="text-lg">На hh.ru пользователи проводят больше времени, чем на других сайтах по поиску работы и персонала</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
@media screen and (max-width:1255px) {
    .block1{
        width:500px
    }
}
@media screen and (max-width:1005px) {
    .container1{
        flex-direction: column;
        align-items: center;
    }
    .main_text{
        font-size: 35px;
    }
    .block1 div h1{
        font-size: 23px;
    }
    .block1 div p{
        font-size: 18px;
    }
}
@media screen and (max-width:540px) {
    img{
        width:280px
    }
    .container1{
        align-items: baseline;
    }
    .block1 div h1{
        font-size: 20px;
    }
    .block1 div p{
        font-size: 16px;
    }
    .block1{
        width:100%;
    }
}
</style>