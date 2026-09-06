<template>
    <button :class="[
      'transition-colors py-1 px-2 lg:py-2 lg:px-4 shadow-2xl text-lg rounded-lg text-black',
      `bg-${color}`, 
       `${attrs}`
    ]">
    {{ text }}
    <font-awesome-icon :icon="icon" />
    </button>
</template>

<script setup>
    defineProps({
        text: {
            type: String,
            required: true
        },
        url: String,
        color: {
            type: String,
            default: "buttonblue"
        },
     
        attrs: String,
    })
</script>