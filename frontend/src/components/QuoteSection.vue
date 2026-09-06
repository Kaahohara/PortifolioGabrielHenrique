<template>
    <div class="bg-lightblue min-h-100 py-20 px-4 max-w-full w-full flex flex-col items-center justify-center">
        <p class="lg:w-2/3 w-full text-slate-800 text-center text-lg lg:text-3xl font-medium leading-relaxed">
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