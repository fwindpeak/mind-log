import request from './index'


export const  listMindlog = ()=> request('/api/mindlogs')
export const  getMindlog = (id)=> request(`/api/mindlogs/{id}`)
export const  delMindlog = (id)=> request.delete(`/api/mindlogs/{id}`)
export const  addMindlog = (content)=>request.post(`/api/mindlogs`,{content:content})
