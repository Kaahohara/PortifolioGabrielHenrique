<template>  
    <div class="transition-transform duration-300 hover:rotate-3 hover:scale-105 bg-lightblue w-full shadow-2xl p-8 rounded-xl border border-gray-100">
        <div class="flex items-start">
            <font-awesome-icon :icon="icon" class="text-buttonblue text-4xl mb-4" />
        </div>  
        <h3 class="text-4xl font-bold mb-4 text-darkblue">{{ title }}</h3>
        <ul class="space-y-2 text-gray-700 list-none list-disc text-xl lg:text-3xl">
            <li><slot></slot></li>
        </ul>
    </div>       
</template>

<script setup>
    defineProps({
    title: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        default: 'feather'
    }
    })
</script>