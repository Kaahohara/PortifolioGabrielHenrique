<script setup>
import { ref } from 'vue'

// Definindo que o componente recebe os dados de fora
defineProps({
  secoes: {
    type: Object,
    required: true
  }
})

// Estado interno para saber qual aba está aberta
const abaAtiva = ref('formacao') 
</script>

<template>
  <section class="w-full bg-blueBackground px-4">
    <div class="lg:w-full mx-auto">
      <div class="flex items-end -mb-px">
        <button 
          v-for="(conteudo, chave) in secoes" 
          :key="chave"
          @click="abaAtiva = chave"
          :class="[
            'relative lg:px-12 lg:py-6 p-2 rounded-t-2xl font-bold transition-all duration-300 flex items-center gap-3 lg:-ml-4 first:ml-0',
            abaAtiva === chave ? 'z-30 text-darkblue' : 'z-10 opacity-70 hover:opacity-100'
          ]"
          :style="{ backgroundColor: abaAtiva === chave ? conteudo.color : '#5a7d7d' }"
        >
          <font-awesome-icon :icon="conteudo.icon" />
          <span class="text-2xl lg:text-3xl">{{ conteudo.label }}</span>
          
          <div v-if="abaAtiva === chave" class="absolute bottom-0 -right-4 w-4 h-4"
               :style="{ boxShadow: `-4px 0 0 0 ${conteudo.color}`, borderRadius: '0 0 0 12px' }">
          </div>
        </button>
      </div>

      <div class="w-full rounded-b-3xl rounded-tr-3xl p-8 lg:p-16 shadow-2xl relative z-20"
           :style="{ backgroundColor: secoes[abaAtiva].color }">
        <h2 class="text-2xl lg:text-3xl font-bold mb-4">{{ secoes[abaAtiva].titulo }}</h2>
        <p class="text-xl lg:text-2xl mb-8">{{ secoes[abaAtiva].desc }}</p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="(img, name) in secoes[abaAtiva].icons" :key="name" class="p-4 bg-white/20 rounded-xl transition-transform duration-300 hover:rotate-3 hover:scale-105">
             <img :src="img" :alt="name" class="h-24 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>