<template>
  <div class="bg-darkblue drop-shadow-2xl py-20 lg:py-20 px-6 lg:px-12 rounded-2xl text-white mt-20 w-full max-w-xl mx-auto">
    <div class="rounded-full absolute -translate-y-1/2 bg-cover bg-center top-0 left-1/2 -translate-x-1/2 h-36 w-36 lg:h-44 lg:w-44 border-4 border-white shadow-xl"
      :style="{ backgroundImage: `url(${img})` }">
    </div>
    <p class="text-base lg:text-lg text-justify leading-relaxed text-slate-200">
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