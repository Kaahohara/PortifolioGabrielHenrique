<script setup>
import { ref } from 'vue'
import Menu from '../components/Menu.vue' 
import Footer from '../components/Footer.vue'
import figmaIcon from '@/assets/media/figmaIcon.png'
import canvaIcon from '@/assets/media/CanvaIcon.png'
import wordIcon from '@/assets/media/WordIcon.png'
import vegasIcon from '@/assets/media/VegasIcon.png'
import reaperIcon from '@/assets/media/ReaperIcon.png'
import capcutIcon from '@/assets/media/capcutIcon.png'
import photoshopIcon from '@/assets/media/photoshopIcon.png'
import Banner from '../components/banner.vue'
import ServiceCard from '../components/ServiceCard.vue'
import bonequinha from '@/assets/media/bonequinho.png'
import InformationCard from '../components/informationcard.vue'
import fotoPerfil from '@/assets/media/fotoPerfil.png'
import ResumeTabs from '../components/resumetabs.vue'

const informacoesCV = {
  formacao: {
    label: 'Lorem ipsum dolor sit amet',
    titulo: 'Lorem ipsum dolor sit amet',
    icon: 'feather',
    color: '#7BA0A0',
    desc: ' Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ',
    icons: { 'Vue': canvaIcon, 'Tailwind': wordIcon, 'Premiere': vegasIcon }
  },
  experiencia: {
    label: 'Lorem ipsum dolor sit amet',
    titulo: 'Lorem ipsum dolor sit amet',
    icon: 'video',
    color: '#5a7d7d',
    desc: ' Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ',
    icons: { 'Vue': canvaIcon, 'Tailwind': wordIcon, 'Premiere': vegasIcon }
  }
}
</script>

<template>
  <div class="m-0 p-0 w-full overflow-x-hidden">
    <Menu />

    <main class="bg-darkblue w-full flex flex-col items-center justify-center font-sans">
      
      <!-- Banner Principal com Largura Controlada -->
      <div class="w-full mx-auto">
        <Banner :img="fotoPerfil" name="John Doe" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."/>
      </div>

      <!-- Seção de ServiceCards com Grid Proporcional -->
    <div class="relative py-12 w-full lg:h-64">
        <div class="grid grid-cols-1 text-left w-full lg:grid-cols-3 lg:absolute lg:left-1/2 lg:-translate-y-full top-1/2 lg:-translate-x-1/2 px-4 md:px-16 gap-6">
          <ServiceCard title="Lorem ipsum dolor sit amet" icon="feather">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ServiceCard>

          <ServiceCard title="Lorem ipsum dolor sit amet" icon="magnifying-glass">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ServiceCard>

          <ServiceCard title="Lorem ipsum dolor sit amet" icon="video">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ServiceCard>
        </div>
      </div>

      <!-- Abas de Currículo -->
      <div class="w-full px-16 mx-auto">
        <ResumeTabs :secoes="informacoesCV" />
      </div>

      <div class="w-full px-16 mx-auto my-12">
        <h2 class="text-3xl md:text-3xl text-white font-bold mb-8 text-center lg:text-left">Habilidades Extras</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full ">
          <InformationCard title="Lorem ipsum dolor sit amet" :img="bonequinha">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </InformationCard>
          
          <InformationCard title="Lorem ipsum dolor sit amet" :img="bonequinha">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </InformationCard>

          <InformationCard title="Lorem ipsum dolor sit amet" :img="bonequinha">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </InformationCard>
        </div>
      </div>

    </main>
    <Footer />
  </div>
</template>
<style scoped>
/* Efeito de Transição Suave entre Conteúdos */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

main {
  min-height: 100vh;
}
</style>