import { defineStore } from 'pinia'
import * as brandService from '../services/brandService' // Ajusta la ruta según tu carpeta

export const useBrandStore = defineStore('brand', {
  state: () => ({
    brands: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchBrands() {
      this.loading = true
      try {
        const { data } = await brandService.getBrands()
        this.brands = data
      } catch (err) {
        this.error = 'Error al cargar las marcas'
      } finally {
        this.loading = false
      }
    },

 
async addBrands(brandData) {
  try {
    const { data } = await brandService.createBrands(brandData)
    // Agregamos al inicio para que aparezca arriba en la tabla
    this.brands.unshift(data.brand) 
  } catch (err) { throw err }
},

async toggleStatus(id) {
  try {
    const { data } = await brandService.toggleBrandStatus(id)
    const index = this.brands.findIndex(b => b.id === id)
    if (index !== -1) {
         // Reemplazamos el objeto con la marca actualizada que viene del back
      this.brands[index] = data.brand
    }
  } catch (err) { throw err }
},

   async updateBrands(id, brandData) {
  try {
    const { data } = await brandService.updateBrands(id, brandData)
    const index = this.brands.findIndex(b => b.id === id)
    if (index !== -1) {
      // Reemplazamos el objeto completo para disparar la reactividad
      this.brands[index] = data.brand 
    }
  } catch (err) { throw err }
},
    

    async removeBrand(id) {
      try {
        await brandService.deleteBrands(id)
        this.brands = this.brands.filter(b => b.id !== id)
      } catch (err) {
        throw err
      }
      
    },
    async restoreBrand(id) {
  try {
    const { data } = await brandService.restoreBrand(id)
    const index = this.brands.findIndex(b => b.id === id)
    if (index !== -1) {
      this.brands[index] = data.brand
    }
  } catch (err) { throw err }
}
  }
})