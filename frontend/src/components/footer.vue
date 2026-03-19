<script setup>
</script>
<template>
    <footer class="relative bg-darkblue pt-20 pb-10 overflow-hidden">
        <div class="absolute top-0 left-0 w-full rotate-180 line-height-0">
            <svg class="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="fill-white"></path>
            </svg>
        </div>

        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-white relative z-10">
            
            <div class="space-y-4">
            <h2 class="text-3xl font-black tracking-tighter hover:skew-x-12 transition-transform cursor-default">
                Gabriel<span class="text-buttonblue"> Silva</span>
            </h2>
            <p class="text-gray-400 max-w-sm">
            </p>
            </div>

            <div class="flex flex-col space-y-2">
            <h3 class="text-lg font-bold mb-2 border-b-2 border-buttonblue w-fit">Navegação</h3>
            <a href="#" class="hover:translate-x-2 hover:text-buttonblue transition-all duration-300 w-fit">📚 Produções</a>
            <a href="#" class="hover:translate-x-2 hover:text-buttonblue transition-all duration-300 w-fit">👥 Equipe</a>
            <a href="#" class="hover:translate-x-2 hover:text-buttonblue transition-all duration-300 w-fit">🚀 Projetos</a>
            </div>

            <div class="flex flex-col items-start md:items-end">
            <h3 class="text-lg font-bold mb-4">Conecte-se</h3>
            <div class="flex space-x-4">
                <a href="#" class="p-3 bg-white/10 rounded-full hover:animate-bounce hover:bg-buttonblue transition-colors">
                <span class="sr-only">Instagram</span>
                📸
                </a>
                <a href="#" class="p-3 bg-white/10 rounded-full hover:animate-bounce hover:bg-buttonblue transition-colors">
                <span class="sr-only">GitHub</span>
                💻
                </a>
            </div>
            <p class="mt-6 text-sm text-gray-500">© 2026 Santa Maria, RS</p>
            </div>
        </div>

        <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-buttonblue/20 rounded-full blur-[100px]"></div>
    </footer>
</template>