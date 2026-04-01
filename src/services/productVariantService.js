import api from './api'

export const getVariants = () => api.get('/variants')
export const createVariants = (data) => api.post('/variants', data)
export const updateVariants = (id, data) => api.put(`/variants/${id}`, data)
export const deleteVariants = (id) => api.delete(`/variants/${id}`)