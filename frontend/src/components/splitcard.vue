<template>
    <div class="flex w-full drop-shadow-6xl p-4 lg:p-10 border-white border-4
     rounded-xl bg-lightblue text-white">
        <div class="flex w-full flex-col justify-between gap-8 ">
            <div class="text-left justify-center flex flex-col gap-10 text-black">
                <p class="text-1xl lg:text-2xl font-bold">{{ title }}</p>
                <p class="text-xl lg:text-1xl">{{ description }}</p>
            </div>
            <slot></slot>
        </div>
        <img :src="img" class="max-h-[500px] hidden lg:flex lg:w-1/2 rounded-xl" />
    </div>
</template>

<script setup>
    defineProps({
        title: {
            type: String,
            required: true
        },
        img: String,
        description: String,
    })

</script>