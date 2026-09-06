<template>
    <div class="relative group overflow-hidden drop-shadow-xl rounded-xl text-white transition-transform duration-300 w-full h-80 lg:h-96">
        <img :src="img" alt="Gallery item" class="h-full w-full lg:border-4 rounded-xl border-white object-cover" />
        <div class="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
            <h3 class="text-2xl lg:text-3xl font-bold mb-2">{{ title }}</h3>
            <p class="text-base lg:text-lg line-clamp-4">{{ description }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: String,
})
</script>