import api from './api'

export const getProducts = () => api.get('/products')
export const createProducts = (data) => api.post('/products', data)
//export const updateProducts = (id, data) => api.put(`/products/${id}`, data)
// Antes: export const updateProducts = (id, data) => api.put(`/products/${id}`, data)
// Ahora:
export const updateProducts = (id, data) => api.post(`/products/${id}`, data)
export const deleteProducts = (id) => api.delete(`/products/${id}`)
export const restoreProduct = (id) => api.post(`/products/${id}/restore`)
export const toggleProductStatus = (id) => api.patch(`/products/${id}/toggle`)

