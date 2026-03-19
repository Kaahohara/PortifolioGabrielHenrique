<template>
      <div class="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-10 w-full grid grid-cols-1 lg:grid-cols-3 gap-30 lg:gap-12 px-6">
          <slot></slot>
        </div>
</template>

<script setup>
defineProps({
    description: {
        type: String,
        required: true
    },
    img: String,
})
</script>