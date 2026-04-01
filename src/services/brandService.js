import api from './api'

export const getBrands = () => api.get('/brands')
export const createBrands = (data) => api.post('/brands', data)
export const updateBrands = (id, data) => api.put(`/brands/${id}`, data)
export const deleteBrands= (id) => api.delete(`/brands/${id}`)

// Nuevas funciones para el estado
export const toggleBrandStatus = (id) => api.patch(`/brands/${id}/toggle`)
export const restoreBrand = (id) => api.post(`/brands/${id}/restore`)