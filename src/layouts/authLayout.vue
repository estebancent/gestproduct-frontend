<script setup>
import { Box, ArrowLeft, Globe } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen flex bg-white dark:bg-slate-950 transition-colors duration-300">
    
    <div class="hidden lg:flex w-1/2 bg-indigo-600 dark:bg-indigo-900 relative overflow-hidden items-center justify-center p-12">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-24 -left-24 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px]"></div>
        <div class="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-indigo-400/20 rounded-full blur-[150px]"></div>
        <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 30px 30px;"></div>
      </div>

      <div class="relative z-10 max-w-lg text-center animate-in fade-in slide-in-from-left-8 duration-1000">
        <div class="inline-flex p-4 rounded-[2rem] bg-white/10 backdrop-blur-2xl border border-white/20 mb-8 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
          <Box class="w-16 h-16 text-white" />
        </div>
        <h2 class="text-5xl font-black text-white tracking-tighter mb-6 leading-tight">
          Control Total en <br/>
          <span class="text-indigo-200 italic font-serif">GestProduct</span>
        </h2>
        <p class="text-indigo-100 text-lg font-medium opacity-80 leading-relaxed">
          Gestiona tu inventario de moda con la velocidad y precisión que tu negocio merece.
        </p>
      </div>
      
      <div class="absolute bottom-12 left-12 flex items-center gap-4">
        <p class="text-indigo-300/40 text-[10px] font-black uppercase tracking-[0.3em]">
          v2.0.26 // Software Architecture
        </p>
      </div>
    </div>

    <div class="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 relative">
      
      <div class="absolute top-8 left-8 sm:left-12">
        <router-link 
          to="/" 
          class="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors"
        >
          <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 transition-colors border border-slate-100 dark:border-slate-800 group-hover:border-indigo-200 dark:group-hover:border-indigo-500/20">
            <ArrowLeft class="w-4 h-4" />
          </div>
          <span>Volver al Sitio</span>
        </router-link>
      </div>

      <div class="absolute top-8 right-8 sm:right-12 hidden sm:block">
        <button class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
          <Globe class="w-4 h-4" /> ES
        </button>
      </div>

      <div class="w-full max-w-md">
        <router-view />
      </div>
    </div>

  </div>
</template>

<style scoped>
/* Transición suave para el cambio de modo oscuro/claro */
.transition-colors {
  transition-property: background-color, border-color, color, fill, stroke;
}
</style>