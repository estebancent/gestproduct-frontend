import { defineStore } from 'pinia'
import * as categoryService from '../services/categoryService' // Ajusta la ruta según tu carpeta

export const useCategoryStore = defineStore('category', {
  state: () => ({
    categories: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchCategories() {
      this.loading = true
      try {
        const { data } = await categoryService.getCategory()
        this.categories = data
      } catch (err) {
        this.error = 'Error al cargar las categorías'
      } finally {
        this.loading = false
      }
    },

 
async addCategories(categoryData) {
  try {
    const { data } = await categoryService.createCategory(categoryData)
    // Agregamos al inicio para que aparezca arriba en la tabla
    this.categories.unshift(data.category) 
  } catch (err) { throw err }
},

async toggleStatus(id) {
  try {
    const { data } = await categoryService.toggleCategoryStatus(id)
    const index = this.categories.findIndex(c => c.id === id)
    if (index !== -1) {
         // Reemplazamos el objeto con la categoría actualizada que viene del back
      this.categories[index] = data.category
    }
  } catch (err) { throw err }
},

   async updateCategories(id, categoryData) {
  try {
    const { data } = await categoryService.updateCategory(id, categoryData)
    const index = this.categories.findIndex(c => c.id === id)
    if (index !== -1) {
      // Reemplazamos el objeto completo para disparar la reactividad
      this.categories[index] = data.category 
    }
  } catch (err) { throw err }
},
    

    async removeCategory(id) {
      try {
        await categoryService.deleteCategory(id)
        this.categories = this.categories.filter(c => c.id !== id)
      } catch (err) {
        throw err
      }
      
    },
    async restoreCategory(id) {
  try {
    const { data } = await categoryService.restoreCategory(id)
    const index = this.categories.findIndex(c => c.id === id)
    if (index !== -1) {
      this.categories[index] = data.category
    }
  } catch (err) { throw err }
}
  }
})