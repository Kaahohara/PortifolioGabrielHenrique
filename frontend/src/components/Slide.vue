<template>
<<<<<<< HEAD
    <div class="swiper-slide transition-all duration-500 scale-80 opacity-40 [.swiper-slide-active]:scale-90 [.swiper-slide-active]:opacity-100 [.swiper-slide-active]:z-20" 
        :data-title="title"  
        :data-description="description">
        <img :src="img" class="rounded-3xl shadow-2xl w-full max-w-[600px] max-h-[800px] mx-auto" />
=======
    <div class="swiper-slide transition-all duration-500 scale-50 opacity-40 [.swiper-slide-active]:scale-80 [.swiper-slide-active]:opacity-100 [.swiper-slide-active]:z-20" 
                    :data-title="title"  
                    :data-description="description">
            <img :src="img" class="rounded-3xl shadow-2xl w-full max-w-[460px] mx-auto" />
>>>>>>> f409b0837a134d8fdd7c74f55bc07821392fa5d9
    </div>
</template>
<script setup>
    defineProps({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        img: String,
    })
</script>