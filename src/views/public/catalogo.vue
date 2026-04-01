<script setup>
import { ref, computed } from 'vue'
import { 
  Search, Filter, LayoutGrid, List, 
  ChevronRight, ShoppingBag, Eye 
} from 'lucide-vue-next'

// Datos de prueba con temática de Moda Femenina
const products = ref([
  { 
    id: 1, 
    name: 'Vestido Midi Floral', 
    category: 'Vestidos', 
    price: 45000, 
    stock: 12, 
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=600' 
  },
  { 
    id: 2, 
    name: 'Blazer Oversize Crema', 
    category: 'Sacos', 
    price: 62000, 
    stock: 5, 
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600' 
  },
  { 
    id: 3, 
    name: 'Top de Seda Minimal', 
    category: 'Tops', 
    price: 18500, 
    stock: 25, 
    image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?q=80&w=600' 
  },
  { 
    id: 4, 
    name: 'Jean Wide Leg Blue', 
    category: 'Pantalones', 
    price: 38000, 
    stock: 0, 
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=600' 
  },
  { 
    id: 5, 
    name: 'Cartera de Cuero Camel', 
    category: 'Accesorios', 
    price: 55000, 
    stock: 3, 
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=600' 
  },
  { 
    id: 6, 
    name: 'Sandalias de Verano Nude', 
    category: 'Calzado', 
    price: 29000, 
    stock: 10, 
    image: 'https://images.unsplash.com/photo-1562273589-104b9efd4a3c?q=80&w=600' 
  },
])

const searchQuery = ref('')
const selectedCategory = ref('Todos')
const categories = ['Todos', 'Vestidos', 'Sacos', 'Tops', 'Pantalones', 'Accesorios', 'Calzado']

// Filtrado inteligente
const filteredProducts = computed(() => {
  return products.value.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCat = selectedCategory.value === 'Todos' || p.category === selectedCategory.value
    return matchesSearch && matchesCat
  })
})

const formatPrice = (value) => {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(value)
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-12 animate-in fade-in duration-700">
    
    <div class="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
      <div class="space-y-2">
        <h2 class="text-4xl font-black text-slate-800 dark:text-white tracking-tight italic">Nueva Colección</h2>
        <p class="text-slate-500 dark:text-slate-400 font-medium tracking-wide text-sm uppercase">Seleccionados exclusivos para vos.</p>
      </div>
      
      <div class="w-full md:w-96 relative group">
        <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="¿Qué prenda buscas hoy?" 
          class="w-full pl-12 pr-4 py-4 bg-slate-100 dark:bg-slate-900 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none dark:text-white font-medium"
        />
      </div>
    </div>

    <div class="flex flex-col lg:flex-row gap-10">
      
      <aside class="w-full lg:w-64 space-y-8">
        <div>
          <h4 class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 border-l-2 border-indigo-600 pl-3">Filtrar por</h4>
          <div class="flex flex-wrap lg:flex-col gap-2">
            <button 
              v-for="cat in categories" :key="cat"
              @click="selectedCategory = cat"
              :class="[
                'px-4 py-2.5 rounded-xl text-xs font-bold transition-all text-left flex justify-between items-center group uppercase tracking-widest',
                selectedCategory === cat 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' 
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              ]"
            >
              {{ cat }}
              <ChevronRight v-if="selectedCategory === cat" class="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div class="p-8 bg-slate-950 rounded-3xl text-white relative overflow-hidden group">
          <div class="relative z-10">
            <h5 class="font-black text-xl mb-2 leading-tight">15% OFF</h5>
            <p class="text-[10px] text-slate-400 mb-4 font-bold uppercase tracking-widest leading-relaxed">En tu primera compra online.</p>
            <button class="w-full py-3 bg-white text-black rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-indigo-500 hover:text-white transition-colors">Copiar Cupón</button>
          </div>
          <ShoppingBag class="absolute -bottom-6 -right-6 w-24 h-24 text-white/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
        </div>
      </aside>

      <div class="flex-1">
        <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
          <div 
            v-for="product in filteredProducts" :key="product.id"
            class="group bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-700 flex flex-col"
          >
            <div class="relative aspect-[3/4] overflow-hidden bg-slate-100">
              <img :src="product.image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              
              <div v-if="product.stock === 0" class="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] flex items-center justify-center">
                 <span class="bg-white text-black px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">Agotado</span>
              </div>

              <div class="absolute bottom-4 left-4 right-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                <button class="w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-md py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white shadow-lg flex items-center justify-center gap-2">
                  Ver Detalles <Eye class="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div class="p-8 space-y-3 flex-1 flex flex-col items-center text-center">
              <span class="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 rounded-full">
                {{ product.category }}
              </span>
              <h3 class="text-lg font-bold text-slate-800 dark:text-white leading-tight">
                {{ product.name }}
              </h3>
              <span class="text-xl font-black text-slate-900 dark:text-white tracking-tighter">{{ formatPrice(product.price) }}</span>
            </div>
          </div>
        </div>

        <div v-else class="flex flex-col items-center justify-center py-24 text-slate-300">
          <ShoppingBag class="w-20 h-20 mb-6 stroke-[1]" />
          <p class="font-bold uppercase text-xs tracking-widest">No hay prendas que coincidan</p>
          <button @click="searchQuery = ''; selectedCategory = 'Todos'" class="mt-6 text-indigo-500 font-black text-[10px] uppercase tracking-[0.2em] hover:tracking-[0.3em] transition-all">Ver Todo</button>
        </div>
      </div>

    </div>
  </div>
</template>