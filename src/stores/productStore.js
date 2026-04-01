import { defineStore } from 'pinia'
import * as productService from '../services/productService'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchProducts() {
      this.loading = true
      this.error = null
      try {
        const { data } = await productService.getProducts()
        this.products = data
      } catch (err) {
        this.error = 'Error al cargar los productos'
      } finally {
        this.loading = false
      }
    },

    async addProducts(formData) {
      try {
        const { data } = await productService.createProducts(formData)
        // Laravel devuelve 'product' cargado con relaciones
        this.products.unshift(data.product) 
        return data.product
      } catch (err) { throw err }
    },

    async updateProducts(id, formData) {
  try {
    // IMPORTANTE: El Service ahora usa .post 
    // y el formData ya lleva el .append('_method', 'PUT') del componente
    const { data } = await productService.updateProducts(id, formData)
    
    // Actualizamos el array local para que el cambio se vea sin recargar
    const index = this.products.findIndex(p => p.id === id)
    if (index !== -1 && data.product) {
      this.products[index] = data.product 
    }
    
    return data; // Opcional, por si quieres usarlo en el componente
  } catch (err) { 
    console.error("Error en Store (Update):", err.response?.data || err.message)
    throw err 
  }
},

    async toggleStatus(id) {
      try {
        const { data } = await productService.toggleProductStatus(id)
        const index = this.products.findIndex(p => p.id === id)
        if (index !== -1) {
          this.products[index] = data.product 
        }
      } catch (err) { throw err }
    },

    async restoreProduct(id) {
      try {
        const { data } = await productService.restoreProduct(id)
        const index = this.products.findIndex(p => p.id === id)
        if (index !== -1) {
          this.products[index] = data.product
        }
      } catch (err) { throw err }
    }
  }
})