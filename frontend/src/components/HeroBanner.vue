<template> 
  <section class="relative w-full h-[60vh] lg:h-[80vh] flex items-center justify-center overflow-hidden bg-black">
    <div 
      class="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
      :style="{ backgroundImage: `url(${img})` }"
    >
      <div class="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
    </div>

    <div class="relative z-10 container mx-auto px-6 text-center">
      <h1 class="text-white text-4xl lg:text-7xl font-extrabold tracking-tight drop-shadow-2xl animate-fade-in">
        {{ title }}
      </h1>
      
      <div class="mt-4 w-24 h-1 bg-blue-500 mx-auto rounded-full shadow-lg"></div>
    </div> 
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}
</style>