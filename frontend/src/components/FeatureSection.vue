<template>
<<<<<<< HEAD
    <article name="cards" class="w-full max-w-7xl mx-auto px-4 lg:px-0 py-10 lg:py-20">
        <!-- Adicionamos :class para inverter a direção do flex dinamicamente -->
        <div 
            class="flex flex-col lg:flex-row items-center justify-between bg-white rounded-2xl shadow-xl overflow-hidden"
            :class="{ 'lg:flex-row-reverse': reverse }"
        >
            <!-- Bloco de Texto -->
            <div class="flex flex-col justify-center w-full lg:w-1/2 p-6 lg:p-16 text-black">
                <div class="flex flex-col gap-6 text-left w-full">
                    <h2 class="text-2xl lg:text-5xl font-bold tracking-tight">
=======
    <article name="cards" class="lg:w-11/12 px-4 lg:px-0 gap-8 items-center justify-center lg:py-20">
        <div class="flex drop-shadow-6xl text-black">
            <div class="flex flex-col items-center justify-center w-full">
                <div class="text-left p-4 lg:p-20 justify-center lg:w-11/12 flex flex-col gap-10 text-black">
                    <p class="text-2xl lg:text-4xl font-bold">
>>>>>>> f409b0837a134d8fdd7c74f55bc07821392fa5d9
                        {{ title }}
                    </h2>
                    <div class="text-base lg:text-lg text-neutral-700 leading-relaxed">
                        <slot></slot>
                    </div>
                </div>
            </div>
<<<<<<< HEAD

            <div v-if="img" class="w-full lg:w-1/2 h-64 lg:h-auto min-h-[350px]">
                <img :src="img" alt="Card illustration" class="w-full h-full object-cover" />
            </div>
=======
            <img :src="img" class="h-250 hidden lg:block w-1/2 rounded-xl" />
>>>>>>> f409b0837a134d8fdd7c74f55bc07821392fa5d9
        </div>
    </article>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    },
    // Se 'reverse' for true, a imagem vai para a esquerda e o texto para a direita
    reverse: {
        type: Boolean,
        default: false
    }
})
</script>