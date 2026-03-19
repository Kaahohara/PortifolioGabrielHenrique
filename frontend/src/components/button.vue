<template>
    <button :class="[
      'transition-colors py-3 px-4 lg:py-4 lg:px-6 shadow-2xl text-2xl rounded-xl text-black',
      `bg-${color}`, 
      `hover:bg-${hoverColor}`, `${attrs}`
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
        hoverColor: {
            type: String,
            default: "[#256969]"
        },
        attrs: String,
    })
</script>