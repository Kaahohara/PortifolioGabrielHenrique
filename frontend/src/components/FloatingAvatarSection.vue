<template>
  <div class="w-full bg-primary py-22 flex flex-col relative justify-center items-center">
    <div class="w-full flex justify-between px-14 items-center absolute left-1/2 -translate-x-1/2 ">
     <slot></slot>
    </div>
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