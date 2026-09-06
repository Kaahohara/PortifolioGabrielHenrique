<script setup>
  import penLogo from '@/assets/media/pen.png'
</script>

<template>
<<<<<<< HEAD
  <nav class="bg-darkblue w-full py-2 md:px-8 flex justify-between items-center shadow-2xl relative z-50">
=======
  <nav class="bg-darkblue w-full md:px-4 flex justify-between items-center shadow-2xl relative z-50">
>>>>>>> f409b0837a134d8fdd7c74f55bc07821392fa5d9
    
    <router-link to="/" class="flex items-center transition-transform hover:scale-110 active:scale-95">
      <img class="w-12 h-auto object-contain" :src="penLogo" alt="pen">
    </router-link>
    
<<<<<<< HEAD
    <ul class="flex items-center text-4xl gap-6 md:gap-12 text-white list-none m-0 p-2">
      <li class="relative group">
        <router-link 
          to="/" 
          class="text-base lg:text-xl font-medium transition-colors "
=======
    <ul class="flex items-center text-4xl gap-6 md:gap-12 text-white list-none m-0 p-4">
      <li class="items-center flex relative group">
        <router-link 
          to="/" 
          class="text-base lg:text-1xl font-medium transition-colors "
>>>>>>> f409b0837a134d8fdd7c74f55bc07821392fa5d9
          active-class="text-buttonblue font-bold"
        >
          Sobre
        </router-link>
        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-buttonblue transition-all group-hover:w-full"></span>
      </li>

      <li class="relative items-center flex group">
        <router-link 
          to="/producoes" 
<<<<<<< HEAD
          class="text-base lg:text-xl font-medium transition-colors "
=======
          class="text-base md:text-1xl font-medium transition-colors "
>>>>>>> f409b0837a134d8fdd7c74f55bc07821392fa5d9
          active-class="text-buttonblue font-bold"
        >
          Produções Literárias
        </router-link>
        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-buttonblue transition-all group-hover:w-full"></span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.router-link-active {
  color: var(--color-buttonblue);
}
</style>