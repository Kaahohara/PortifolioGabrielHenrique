<template>
    <div class="bg-darkblue drop-shadow-6xl p-2 lg:p-14 relative rounded-xl text-white">
    <div class="rounded-full absolute -translate-y-1/2 bg-cover top-0 left-1/2 -translate-x-1/2 h-50 w-50 lg:h-64 lg:w-64 border-4 border-white"
    :style="{ backgroundImage: `url(${img})` }"></div>
        <p class="text-lg lg:text-3xl p-2 text-justify lg:pt-20 pt-25">
            <slot></slot>
        </p>
    </div>
</template>

<script setup>
defineProps({
 
  img: {
    type: String,
    required: true
  }
})
</script>
