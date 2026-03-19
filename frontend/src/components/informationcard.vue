<template>
    <div class="bg-lightblue/20 border border-white/10 min-h-32 rounded-2xl animate-pulse">
        <img :src="img" class="h-80 w-auto object-contain overflow-hidden mx-auto mt-8 opacity-50" />
        <div class="bg-lightblue p-2">
            <p class="text-center font-bold text-2xl lg:text-4xl">{{ title }}</p>
            <p class="text-center text-black lg:text-3xl text-lg mt-4">
                <slot></slot>
            </p>
        </div>
    </div>
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