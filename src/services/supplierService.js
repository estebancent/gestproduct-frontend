import api from './api'

export const getSuppliers = () => api.get('/suppliers')
export const createSuppliers = (data) => api.post('/suppliers', data)
export const updateSuppliers = (id, data) => api.put(`/suppliers/${id}`, data)
export const deleteSuppliers = (id) => api.delete(`/suppliers/${id}`)

// Nuevas funciones para el estado
export const toggleSupplierStatus = (id) => api.patch(`/suppliers/${id}/toggle`)
export const restoreSupplier = (id) => api.post(`/suppliers/${id}/restore`)