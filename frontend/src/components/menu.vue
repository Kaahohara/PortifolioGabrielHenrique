<script setup>
  import penLogo from '@/assets/media/pen.png'
</script>

<template>
  <nav class="bg-darkblue w-full py-2 md:px-8 flex justify-between items-center shadow-2xl relative z-50">
    
    <router-link to="./" class="flex items-center transition-transform hover:scale-110 active:scale-95">
      <img class="w-12 h-auto object-contain" :src="penLogo" alt="pen">
    </router-link>
    
    <ul class="flex items-center text-4xl gap-6 md:gap-12 text-white list-none m-0 p-2">
      <li class="relative items-center flex group">
        <router-link 
          to="./" 
          class="text-base lg:text-xl font-medium transition-colors "
          active-class="text-buttonblue font-bold"
        >
          Sobre
        </router-link>
        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-buttonblue transition-all group-hover:w-full"></span>
      </li>

      <li class="relative items-center flex group">
        <router-link 
          to="./producoes" 
          class="text-base lg:text-xl font-medium transition-colors "
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