<template>
    <div class="bg-lightblue lg:h-100 h-40 max-w-full w-full flex flex-col items-center justify-center">
        <p class="lg:w-1/2 w-full text-black text-center text-xl lg:text-4xl">
            {{ quote }}
        </p>
    </div>
</template>

<script setup>
defineProps({
    quote:{
        type: String,
        required: true
    }
})
</script>