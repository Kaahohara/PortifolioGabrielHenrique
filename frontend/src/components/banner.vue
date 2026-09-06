<template>
    <div class="max-w-full bg-primary lg:min-h-250 w-full">
        <div class="m-auto lg:pt-24 lg:pb-36">
            <div class="w-full gap-4 flex justify-center items-center flex-col lg:flex-row">
                
                <div class="shadow-2xl text-left lg:px-12 py-20 p-8 animate-slide-left lg:rounded-br-full m-auto lg:rounded-tr-full lg:w-1/2 justify-start">
                    <p class="text-3xl lg:text-5xl lg:pr-14 mb-4">
                        Eu sou <b>{{ name }}</b><br>
                        estudante de <b>Jornalismo</b> e <b>Copy Writer.</b>
                    </p>
                <p class="text-xl lg:text-2xl text-justify lg:pr-14 leading-relaxed">
                    {{ description }}
                </p>
                
                <div class="flex flex-wrap gap-4 mt-8 text-xl lg:text-4xl">
                    <Button text="Saiba Mais" url="" color="buttonblue" hoverColor="[#256969]" />
                    <Button text="Portifólio" url="" color="buttonblue" hoverColor="[#256969]" />
                </div>
            </div>
            <div className="lg:w-1/2 hidden lg:flex pr-14 justify-end">
                <img 
                    :src="img"
                    className="h-full rounded-full w-4/6 object-cover border-4 border-buttonblue shadow-2xl animate-custom-bounce " 
                    alt="perfil" 
                />
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