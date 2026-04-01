<script setup>
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-vue-next'
</script>

<template>
  <div class="space-y-32 pb-20 overflow-hidden">
    
    <section class="max-w-7xl mx-auto px-6 pt-16 lg:pt-32 flex flex-col items-center text-center">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-widest mb-8 animate-bounce">
        <Zap class="w-4 h-4" /> Nueva Versión 2.0 disponible
      </div>
      
      <h1 class="text-5xl lg:text-7xl font-black text-slate-800 dark:text-white tracking-tighter mb-8 leading-[1.1]">
        Toma el control total de <br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">tu inventario hoy mismo.</span>
      </h1>
      
      <p class="max-w-2xl text-lg text-slate-500 dark:text-slate-400 font-medium mb-10">
        GestProduct te ayuda a gestionar stock, ventas y proveedores con una interfaz moderna, rápida y totalmente responsive.
      </p>

      <div class="flex flex-col sm:flex-row gap-4">
        <router-link to="/auth/login" class="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-600 dark:hover:bg-indigo-50 transition-all shadow-xl shadow-slate-200 dark:shadow-none">
          Empezar Ahora <ArrowRight class="w-5 h-5" />
        </router-link>
        <button class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 px-10 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all">
          Ver Catálogo
        </button>
      </div>

      <div class="mt-20 relative w-full max-w-5xl group">
        <div class="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
        <div class="relative bg-slate-200 dark:bg-slate-800 rounded-[2rem] overflow-hidden border-8 border-slate-900 dark:border-slate-800 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
            alt="Dashboard Preview" 
            class="w-full h-auto object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
            <p class="text-white font-bold">Interfaz intuitiva diseñada para la velocidad.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
      <div class="space-y-4 flex flex-col items-center">
        <div class="w-14 h-14 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600">
          <CheckCircle2 />
        </div>
        <h3 class="text-xl font-black dark:text-white">Stock en Tiempo Real</h3>
        <p class="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">Notificaciones automáticas vía WhatsApp cuando el stock esté bajo.</p>
      </div>
      
      <div class="space-y-4 flex flex-col items-center">
        <div class="w-14 h-14 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-600">
          <ShieldCheck />
        </div>
        <h3 class="text-xl font-black dark:text-white">Seguridad Total</h3>
        <p class="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">Roles de usuario protegidos y backups diarios de tu base de datos PostgreSQL.</p>
      </div>

      <div class="space-y-4 flex flex-col items-center">
        <div class="w-14 h-14 bg-purple-50 dark:bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-600">
          <Zap />
        </div>
        <h3 class="text-xl font-black dark:text-white">Soporte Multiplataforma</h3>
        <p class="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">Accede desde tu computadora, tablet o celular sin perder funciones.</p>
      </div>
    </section>

  </div>
</template>