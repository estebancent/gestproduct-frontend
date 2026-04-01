<script setup>
import { Box, Menu, X, ArrowRight } from 'lucide-vue-next'
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-slate-950 transition-colors">
    <nav class="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-900">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <router-link to="/" class="flex items-center gap-2 group">
          <div class="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:rotate-12 transition-transform">
            <Box class="text-white w-6 h-6" />
          </div>
          <span class="text-xl font-black text-slate-800 dark:text-white tracking-tight">GestProduct</span>
        </router-link>

        <div class="hidden md:flex items-center gap-8">
          <router-link to="/" class="nav-item">Inicio</router-link>
          <router-link to="/catalog" class="nav-item">Catálogo</router-link>
          <router-link to="/about" class="nav-item">Nosotros</router-link>
          
          <div class="h-6 w-px bg-slate-200 dark:bg-slate-800"></div>
          
          <router-link to="/auth/login" class="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors">
            Iniciar Sesión
          </router-link>
          <router-link to="/auth/login" class="bg-indigo-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
            Probar Gratis
          </router-link>
        </div>

        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 text-slate-600 dark:text-slate-400">
          <Menu v-if="!isMenuOpen" />
          <X v-else />
        </button>
      </div>

      <div v-if="isMenuOpen" class="md:hidden bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 p-6 space-y-4">
        <router-link to="/" class="block font-bold text-slate-800 dark:text-white">Inicio</router-link>
        <router-link to="/catalog" class="block font-bold text-slate-800 dark:text-white">Catálogo</router-link>
        <hr class="dark:border-slate-800">
        <router-link to="/auth/login" class="block font-bold text-indigo-600">Entrar al Sistema</router-link>
      </div>
    </nav>

    <main class="pt-20">
      <router-view />
    </main>

    <footer class="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 py-12 mt-20">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex items-center gap-2 opacity-50 grayscale">
          <Box class="w-5 h-5 text-slate-900 dark:text-white" />
          <span class="font-bold text-slate-900 dark:text-white">GestProduct</span>
        </div>
        <p class="text-sm text-slate-500 dark:text-slate-400 font-medium">
          © 2026 Sistema de Inventarios. Todos los derechos reservados.
        </p>
        <div class="flex gap-6">
          <a href="#" class="text-slate-400 hover:text-indigo-600 transition-colors text-sm font-bold uppercase tracking-widest">Soporte</a>
          <a href="#" class="text-slate-400 hover:text-indigo-600 transition-colors text-sm font-bold uppercase tracking-widest">Privacidad</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.nav-item {
  @apply text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors;
}
</style>