<script setup>
import { 
  Heart, Star, Sparkles, Globe, 
  Users, Award, ArrowRight, Instagram 
} from 'lucide-vue-next'

const stats = [
  { label: 'Años de Trayectoria', value: '12+' },
  { label: 'Prendas Vendidas', value: '50k+' },
  { label: 'Clientes Felices', value: '15k+' },
  { label: 'Tiendas Físicas', value: '3' },
]

const values = [
  { 
    title: 'Calidad Premium', 
    desc: 'Seleccionamos las mejores telas y materiales para asegurar durabilidad y confort.',
    icon: Star,
    color: 'text-amber-500'
  },
  { 
    title: 'Moda Consciente', 
    desc: 'Nos enfocamos en procesos de fabricación responsables y empaques eco-friendly.',
    icon: Heart,
    color: 'text-rose-500'
  },
  { 
    title: 'Diseño Exclusivo', 
    desc: 'Cada pieza es pensada por nuestro equipo creativo para resaltar la esencia femenina.',
    icon: Sparkles,
    color: 'text-indigo-500'
  }
]
</script>

<template>
  <div class="animate-in fade-in duration-700">
    
    <section class="max-w-7xl mx-auto px-6 py-20 lg:py-32">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-8">
          <span class="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 dark:text-indigo-400 border-l-4 border-indigo-600 pl-4">
            Nuestra Historia
          </span>
          <h2 class="text-5xl lg:text-7xl font-black text-slate-800 dark:text-white tracking-tighter leading-none">
            Más que una marca, <br/>
            <span class="italic text-slate-400">una forma de ser.</span>
          </h2>
          <p class="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            Nacimos en 2014 con una misión clara: empoderar a la mujer a través de prendas que combinan elegancia contemporánea con comodidad absoluta. Lo que comenzó como un pequeño taller, hoy es una comunidad de miles de mujeres que eligen calidad sobre cantidad.
          </p>
          <div class="flex gap-4">
            <button class="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white transition-all">
              Ver Colección <ArrowRight class="w-4 h-4" />
            </button>
          </div>
        </div>

        <div class="relative">
          <div class="aspect-[4/5] rounded-[3rem] overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-700 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=800" alt="Nosotros 1" class="w-full h-full object-cover" />
          </div>
          <div class="absolute -bottom-10 -left-10 w-2/3 aspect-square rounded-[2rem] overflow-hidden border-8 border-white dark:border-slate-950 shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-700">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800" alt="Nosotros 2" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 dark:bg-slate-900/50 py-20 border-y border-slate-100 dark:border-slate-800">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        <div v-for="stat in stats" :key="stat.label">
          <h4 class="text-4xl lg:text-5xl font-black text-slate-800 dark:text-white mb-2 tracking-tighter">{{ stat.value }}</h4>
          <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">{{ stat.label }}</p>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-32 text-center">
      <h3 class="text-3xl font-black text-slate-800 dark:text-white mb-16 tracking-tight">Lo que nos mueve</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div v-for="val in values" :key="val.title" class="group p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-500 text-center flex flex-col items-center">
          <div :class="['w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform', val.color]">
            <component :is="val.icon" class="w-8 h-8" />
          </div>
          <h4 class="text-xl font-black text-slate-800 dark:text-white mb-4 italic">{{ val.title }}</h4>
          <p class="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">{{ val.desc }}</p>
        </div>
      </div>
    </section>

    <section class="max-w-5xl mx-auto px-6 mb-32">
      <div class="bg-indigo-600 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-indigo-500/20">
        <div class="relative z-10">
          <Instagram class="w-12 h-12 text-white/30 mx-auto mb-6" />
          <h3 class="text-3xl lg:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
            Sé parte de nuestro mundo <br/> en las redes.
          </h3>
          <p class="text-indigo-100 mb-10 text-lg font-medium opacity-80">Únete a @GestProductModa para enterarte de lanzamientos y preventas.</p>
          <button class="bg-white text-indigo-600 px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-50 transition-all shadow-xl active:scale-95">
            Seguir en Instagram
          </button>
        </div>
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
      </div>
    </section>

  </div>
</template>