import { defineStore } from 'pinia'
import * as supplierService from '../services/supplierService' // Ajusta la ruta según tu carpeta

export const useSupplierStore = defineStore('supplier', {
  state: () => ({
    suppliers: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchSuppliers() {
      this.loading = true
      try {
        const { data } = await supplierService.getSuppliers()
        this.suppliers = data
      } catch (err) {
        this.error = 'Error al cargar los proveedores'
      } finally {
        this.loading = false
      }
    },

 
async addSuppliers(supplierData) {
  try {
    const { data } = await supplierService.createSuppliers(supplierData)
    // Agregamos al inicio para que aparezca arriba en la tabla
    this.suppliers.unshift(data.supplier) 
  } catch (err) { throw err }
},

async toggleStatus(id) {
  try {
    const { data } = await supplierService.toggleSupplierStatus(id)
    const index = this.suppliers.findIndex(s => s.id === id)
    if (index !== -1) {
         // Reemplazamos el objeto con el proveedor actualizado que viene del back
      this.suppliers[index] = data.supplier 
    }
  } catch (err) { throw err }
},

   async updateSuppliers(id, supplierData) {
  try {
    const { data } = await supplierService.updateSuppliers(id, supplierData)
    const index = this.suppliers.findIndex(s => s.id === id)
    if (index !== -1) {
      // Reemplazamos el objeto completo para disparar la reactividad
      this.suppliers[index] = data.supplier 
    }
  } catch (err) { throw err }
},
    

    async removeSupplier(id) {
      try {
        await supplierService.deleteSuppliers(id)
        this.suppliers = this.suppliers.filter(s => s.id !== id)
      } catch (err) {
        throw err
      }
      
    },
    async restoreSupplier(id) {
  try {
    const { data } = await supplierService.restoreSupplier(id)
    const index = this.suppliers.findIndex(s => s.id === id)
    if (index !== -1) {
      this.suppliers[index] = data.supplier
    }
  } catch (err) { throw err }
}
  }
})