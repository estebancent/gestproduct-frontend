<script setup>
import { ref, computed } from 'vue'
import { useAuthStore } from '../../stores/authStore'
import { Mail, Lock, Loader2, ArrowRight, AlertCircle } from 'lucide-vue-next'

const email = ref('')
const password = ref('')
const auth = useAuthStore()

// VALIDACIONES EN TIEMPO REAL
const emailError = computed(() => {
  if (email.value.length === 0) return null
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email.value) ? null : 'Email no válido'
})

const passwordError = computed(() => {
  if (password.value.length === 0) return null
  return password.value.length < 6 ? 'Mínimo 6 caracteres' : null
})

const isFormInvalid = computed(() => {
  return emailError.value || passwordError.value || !email.value || !password.value
})

const handleLogin = async () => {
  if (isFormInvalid.value) return
  await auth.login({
    email: email.value,
    password: password.value
  })
}
</script>

<template>
  <div class="animate-in fade-in slide-in-from-bottom-4 duration-700">
    <div class="mb-10 text-center lg:text-left">
      <h1 class="text-3xl font-black text-slate-800 dark:text-white tracking-tight mb-2">Iniciar Sesión</h1>
      <p class="text-slate-500 dark:text-slate-400 font-medium">Panel de Gestión de Productos</p>
    </div>

    <form @submit.prevent="handleLogin" class="space-y-6">
      
      <div class="space-y-2 group">
        <label class="input-label-pro">Correo Electrónico</label>
        <div class="relative">
          <Mail :class="['input-icon', emailError ? 'text-rose-500' : '']" />
          <input 
            v-model="email" 
            type="email" 
            :class="['auth-input-pro', emailError ? 'border-rose-500 bg-rose-50/30 dark:bg-rose-900/10' : '']" 
            placeholder="admin@gestproduct.com"
          />
        </div>
        <p v-if="emailError" class="text-[10px] text-rose-500 font-bold flex items-center gap-1 animate-in fade-in">
          <AlertCircle class="w-3 h-3" /> {{ emailError }}
        </p>
      </div>

      <div class="space-y-2 group">
        <div class="flex justify-between items-end">
          <label class="input-label-pro">Contraseña</label>
        </div>
        <div class="relative">
          <Lock :class="['input-icon', passwordError ? 'text-rose-500' : '']" />
          <input 
            v-model="password" 
            type="password" 
            :class="['auth-input-pro', passwordError ? 'border-rose-500 bg-rose-50/30 dark:bg-rose-900/10' : '']" 
            placeholder="••••••••••••"
          />
        </div>
        <p v-if="passwordError" class="text-[10px] text-rose-500 font-bold flex items-center gap-1 animate-in fade-in">
          <AlertCircle class="w-3 h-3" /> {{ passwordError }}
        </p>
      </div>

      <button
        type="submit"
        :disabled="auth.loading || isFormInvalid"
        class="login-submit-btn"
      >
        <Loader2 v-if="auth.loading" class="w-5 h-5 animate-spin" />
        <template v-else>
          Acceder al Panel <ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </template>
      </button>

    </form>
  </div>
</template>

<style scoped>
.input-label-pro {
  @apply text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 ml-1;
}

.auth-input-pro {
  @apply w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-0 focus:border-indigo-500 transition-all outline-none text-slate-700 dark:text-white placeholder:text-slate-400 font-medium;
}

.input-icon {
  @apply absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors;
}

.login-submit-btn {
  @apply w-full flex items-center justify-center py-4 rounded-2xl font-bold text-sm transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed
         bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white shadow-xl shadow-slate-200 dark:shadow-none;
}
</style>