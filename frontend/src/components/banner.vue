<template>
    <div class="max-w-full bg-primary lg:min-h-350 w-full">
        <div class="m-auto lg:pt-24 lg:pb-72">
            <div class="w-full gap-4 flex justify-center items-center flex-col lg:flex-row">
                <div class="shadow-2xl text-left lg:px-12 py-20 p-8 lg:rounded-br-full m-auto lg:rounded-tr-full lg:w-1/2 justify-start">
                    <p class="text-2xl lg:text-4xl lg:pr-14 mb-4">
                        Eu sou <b>{{ name }}</b><br>
                        estudante de <b>Jornalismo</b> e <b>Copy Writer.</b>
                    </p>
                    <p class="text-xl lg:text-2xl text-justify lg:pr-14 leading-relaxed">
                        {{ description }}
                    </p>
                    <div class="flex flex-wrap gap-4 mt-8 text-xl">
                        <a href="#" class="hover:-translate-y-2 duration-300"><Button text="Saiba Mais" url="" color="buttonblue" attrs="hover:bg-[#256969]" /></a>
                        <a href="#" class="hover:-translate-y-2 duration-300"><Button text="Portifólio" url="" color="buttonblue" attrs="hover:bg-[#256969]" /></a>
                    </div>
                </div>
            
                <div class="lg:w-1/2 hidden lg:flex pr-14 justify-end">
                    <img :src="img" class="animate-pulo h-full rounded-full w-4/6 object-cover border-4 border-buttonblue shadow-2xl" alt="perfil">
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Button from './button.vue'
    defineProps({
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        img: {
            type: String
        }
    })
</script>