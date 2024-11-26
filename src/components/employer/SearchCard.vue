<template>
    <div class="flex flex-col justify-between gap-6 p-8 border border-gray-400 rounded-2xl">
        <div class="w-full rounded-lg">
            <slot name="main_img"></slot>
        </div>

        
        <div>
            <h1 class="font-medium text-lg pb-1">
                <slot name="h_text"></slot>
            </h1>
            <p class="from-neutral-500">
                <slot name="p_text"></slot>
            </p>
        </div>


        <div class="flex flex-row items-center gap-2">
            <div class="bg-slate-200 rounded-full p-3">
                <div class="w-5 h-5"><slot name="topic1_img"></slot></div>
            </div>
            <div><slot name="topic1_text"></slot></div>
        </div>
        <div class="flex flex-row items-center gap-2">
            <div class="bg-myPinkVeryLight rounded-full p-3">
                <div class="w-5 h-5"><slot name="topic2_img"></slot></div>
            </div>
            
            <div><slot name="topic2_text"></slot></div>
        </div>


        <div class="w-full bg-blue-500 rounded text-center text-white py-3 cursor-pointer hover:bg-blue-400"><slot name="butt_text"></slot></div>
        
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>