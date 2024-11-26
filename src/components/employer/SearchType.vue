<template>
    <div class="container-page">
        <div class="flex flex-col justify-center items-center gap-14">
            <h1 class="font-bold text-5xl text-center opacity-80 main_text">Выбирайте, как искать</h1>
            <div class="flex flex-row gap-10 block1">
                <!-- Карточка с "Часто выбирают" -->
                <div class="w-455 [h:620px] relative card flex content-between">
                    <!-- Надпись "Часто выбирают" -->
                    <div class="bg-white px-2 h-8 rounded absolute [left:50%] [top:-15px] w-48 text-center transform -translate-x-1/2">
                        <div class="text-green-600 bg-green-200 font-medium text-lg px-3 py-1 rounded-2xl">
                            Часто выбирают
                        </div>
                    </div>
                    <!-- Контент карточки -->
                    <search-card>
                        <template #main_img>
                            <img src="@/assets/images/employer/first_main_search.jpg" />
                        </template>
                        <template #h_text>Публикуйте вакансии</template>
                        <template #p_text>Опишите, кто вам нужен — кандидаты сами с вами свяжутся, вам останется только выбрать</template>
                        <template #topic1_img>
                            <img src="@/assets/images/employer/veryfied.png" />
                        </template>
                        <template #topic1_text>Вы платите только за публикацию, вакансия активна 30 дней</template>
                        <template #topic2_img>
                            <img src="@/assets/images/employer/gift.png" />
                        </template>
                        <template #topic2_text>Бонусом подберём до 15 кандидатов: с ними можно сразу связаться</template>
                        <template #butt_text>Разместить вакансию</template>
                    </search-card>
                </div>

                <!-- Вторая карточка -->
                <div class="w-455 [h:620px] card">
                    <search-card >
                        <template #main_img>
                            <img src="@/assets/images/employer/second_main_search.jpg" />
                        </template>
                        <template #h_text>Находите людей в базе резюме</template>
                        <template #p_text>Можно не ждать откликов — сразу выбирайте подходящих кандидатов и приглашайте на работу</template>
                        <template #topic1_img>
                            <img src="@/assets/images/employer/veryfied.png" />
                        </template>
                        <template #topic1_text>Вы платите только за просмотр контактов</template>
                        <template #topic2_img>
                            <img src="@/assets/images/employer/clock.png" />
                        </template>
                        <template #topic2_text>Контакты открыты до конца действия доступа</template>
                        <template #butt_text>Купить доступ</template>
                    </search-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SearchCard from './SearchCard.vue';
</script>

<style scoped>
.block1 {
    width: 100%; 
    max-width: 965px;
}
.card{
    padding-left:10px;
    padding-right: 10px;
}
@media screen and (max-width:755px) {
    .block1{
        flex-wrap: wrap;
        justify-content: center;
    }
    .main_text{
        font-size: 35px;
    }
}

</style>