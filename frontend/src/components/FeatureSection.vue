<template>
    <article name="cards" class="lg:w-11/12 px-4 lg:px-0 gap-8 items-center justify-center lg:py-20">
        <div class="flex drop-shadow-6xl text-black">
            <div class="flex flex-col items-center justify-center w-full">
                <div class="text-left p-4 lg:p-20 justify-center lg:w-11/12 flex flex-col gap-10 text-black">
                    <p class="text-2xl lg:text-4xl font-bold">
                        {{ title }}
                    </p>
                    <slot></slot>
                </div>
            </div>
            <img :src="img" class="h-250 hidden lg:block w-1/2 rounded-xl" />
        </div>
    </article>
</template>
<script setup>

    defineProps({
        title: {
            type: String,
            required: true
        },
        img: String,
    })
</script>