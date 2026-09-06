<template>
    <section name="carousel" class="hidden lg:flex flex-col items-center bg-white w-full min-h-300 overflow-hidden">
        <div class="w-11/12 flex flex-col items-center justify-center py-12 md:py-24">
          <div class="swiper w-full mySwiper flex items-center justify-center p-4 lg:p-24 overflow-visible relative">
            <div class="swiper-wrapper items-center">
                <slot></slot>
            </div>

            <div class="w-full flex flex-col max-w-11/12 items-center justify-center mx-auto mt-8 md:-mt-14 relative z-30">
                <div class="w-full bg-lightblue min-h-65 py-8 px-6 rounded-3xl shadow-xl text-center transition-all duration-500 border border-white/20" id="text-box">
                    <h2 class="text-3xl font-bold text-darkblue mb-2 md:mb-4" id="carousel-title">Título do Projeto</h2>
                    <p class="text-2xl text-buttonblue leading-relaxed text-justify" id="carousel-desc">Descrição do projeto aparece aqui.</p>
                </div>
            </div>

            <div class="swiper-button-next z-30 flex !text-darkblue !right-4"></div>
            <div class="swiper-button-prev z-30 flex !text-darkblue !left-4"></div>
          </div>
        </div>
    </section>
</template>

<script setup>
 
</script>