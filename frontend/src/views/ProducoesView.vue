<script setup>
import { onMounted } from 'vue';
import Menu from '../components/Menu.vue';
import Footer from '../components/Footer.vue';
import bonequinha from '@/assets/media/bonequinho.png'
import quadro from '@/assets/media/quadro.png'
import bonequinho2 from '@/assets/media/bonequinho2.png'
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import FeatureSection from '../components/FeatureSection.vue'
import HeroBanner from '../components/HeroBanner.vue'
import Gallery from '../components/gallery.vue'
import FloatingAvatarSection from '../components/FloatingAvatarSection.vue';
import QuoteSection from '../components/QuoteSection.vue';
import Splitcard from '../components/splitcard.vue';
import Carrosel from '../components/carrosel.vue';
import TestimonialCard from '../components/TestimonialCard.vue';
import Slide from '../components/Slide.vue';
import Button from '../components/button.vue';
import image1 from '@/assets/media/image1.jpg';
import image2 from '@/assets/media/image11.jpg';
import bannerimage from '@/assets/media/image3.jpg';
import BreadCrumb from '@/components/breadcrumb.vue';
import image4 from '@/assets/media/image4.jpg';
import image5 from '@/assets/media/image5.jpg';
import image6 from '@/assets/media/image6.jpg';
import image7 from '@/assets/media/image7.jpg';
import image8 from '@/assets/media/image8.jpg';
import image9 from '@/assets/media/image9.jpg';
import image10 from '@/assets/media/image10.jpg';

onMounted(() => {
  const swiper = new Swiper(".mySwiper", {
    modules: [Navigation],
    slidesPerView: 1,
    centeredSlides: true,
    initialSlide: 1,
    loop: true,
    spaceBetween: -20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: -60,
      }
    },
    on: {
      init: function () { updateText(this); },
      slideChange: function () { updateText(this); },
    },
  });
});

function updateText(swiperInstance) {
  const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
  if (!activeSlide) return;

  const title = activeSlide.getAttribute('data-title');
  const desc = activeSlide.getAttribute('data-description');

  const titleEl = document.getElementById('carousel-title');
  const descEl = document.getElementById('carousel-desc');
  const boxEl = document.getElementById('text-box');

  if (titleEl && descEl) {
    boxEl.style.opacity = "0";
    setTimeout(() => {
      titleEl.innerText = title || "Projeto";
      descEl.innerText = desc || "Descrição não disponível";
      boxEl.style.opacity = "1";
    }, 300);
  }
}
</script>

<template>
  <Menu />
  <div class="producoes-page">
    <BreadCrumb :items="[{ text: 'Home', href: '/' }, { text: 'Produções', href: '/producoes' }]" />
    <HeroBanner title="Produções" :img="bannerimage" />

    <div class="bg-primary w-full flex flex-col items-center justify-center">
      <Carrosel>
        <Slide :img="image2" title="Lorem ipsum dolor sit amet" 
        description="
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"/>
       <Slide :img="image2" title="Lorem ipsum dolor sit amet" 
        description="
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"/>
       <Slide :img="image2" title="Lorem ipsum dolor sit amet" 
        description="
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"/>
        </Carrosel>
    </div>

      <section>
        <div class="flex items-center justify-center w-full">
          <div class="flex items-center flex-col gap-5 lg:w-1/2 p-10">
            <p class="lg:text-6xl text-3xl font-bold">Lorem ipsum dolor sit amet</p>
            <p class="text-xl lg:text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        
        <article name="cards" class="grid grid-cols-1 md:grid-cols-3 w-full h-full gap-4 items-center justify-center mt-20 mb-50 px-4">
          <Gallery title="Lorem ipsum dolor sit amet" description="Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " :img="image5" />
          <Gallery title="Lorem ipsum dolor sit amet" description="Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " :img="image4" />
          <Gallery title="Lorem ipsum dolor sit amet" description="Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " :img="image6" />          
          <Gallery title="Lorem ipsum dolor sit amet" description="Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " :img="image8" />
          <Gallery title="Lorem ipsum dolor sit amet" description="Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " :img="image5" />
          <Gallery title="Lorem ipsum dolor sit amet" description="Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " :img="image7" />
        </article>
      </section>
      <div class="w-full min-h-[360px] bg-white"></div>
      <article name="cards" class="flex bg-lightblue max-w-full relative w-full flex-col items-center justify-center py-40">
        <FloatingAvatarSection>
          <TestimonialCard :img="image10">Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </TestimonialCard>
          <TestimonialCard :img="image10">Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </TestimonialCard>
          <TestimonialCard :img="image10">Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </TestimonialCard>
        </FloatingAvatarSection> 
      </article>
      <section class="w-full flex flex-col items-center justify-center">
        <QuoteSection quote='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.""' />
      </section>
      <div class="flex items-center justify-center">
        <article name="cards" class="grid w-11/12 lg:grid-cols-2 grid-cols-1 gap-8 px-6 lg:px-0 items-center justify-center py-20">
            <Splitcard :img="bonequinho2" title="Lorem ipsim dolor sit amet" description="Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ">
              <div class="flex justify-left px-8 pb-8">
                <Button text="Saiba Mais" url="" color="buttonblue" hoverColor="[#256969]" icon="arrowRight" attrs="hover:bg-[#256969] rounded-xl lg:rounded-2xl" />
              </div>
            </Splitcard>
            <Splitcard :img="bonequinho2" title="Lorem ipsim dolor sit amet" description="Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ">
              <div class="flex justify-left px-8 pb-8">
                  <Button text="Saiba Mais" url="" color="buttonblue" hoverColor="[#256969]" icon="arrowRight" attrs="hover:bg-[#256969] rounded-xl lg:rounded-2xl" />
              </div>
            </Splitcard>
        </article>
      </div>  
      <div class="flex items-center justify-center">   
        <FeatureSection :img="image9" title="Aaisicing elit. consectetur adipisicing elit."> 
          <p class="text-xl lg:text-2xl">
            Voluptatibus suscipit nisi nostrum facilis ipsa neque iure. Voluptatum, libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas id ipsam, saepe at illum sit voluptate autem, incidunt reprehenderit expedita voluptatibus suscipit nisi nostrum facilis ipsa neque iure. Voluptatum, libero.
          </p>
        </FeatureSection>
      </div>
     <!-- <article name="gallery" class="w-full flex flex-col items-center justify-center bg-darkblue py-12">
          <p class="text-darkblue p-4 text-3xl font-bold">Veja as produções</p>
          <div class="grid w-full max-w-7xl grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            <img :src="inimigoImg" class="max-h-[600px] w-full object-cover rounded-lg shadow-lg" />
            <img :src="inimigoImg" class="max-h-[600px] w-full object-cover rounded-lg shadow-lg" />
            <img :src="revistaMeio" class="max-h-[600px] w-full object-cover rounded-lg shadow-lg" />
          </div>
      </article> -->
    </div>

  <Footer />
</template>

<style scoped>
#text-box {
  transition: opacity 0.3s ease-in-out;
}
</style>