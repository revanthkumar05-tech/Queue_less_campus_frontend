import axios from'axios';
const api=axios.create({baseURL:import.meta.env.VITE_API_URL||'http://localhost:8080/api'});
api.interceptors.request.use(c=>{const t=sessionStorage.getItem('token');if(t)c.headers.Authorization=`Bearer ${t}`;return c;});
api.interceptors.response.use(r=>r,e=>{if(e.response?.status===401){sessionStorage.removeItem('token');sessionStorage.removeItem('user');}return Promise.reject(new Error(e.response?.data?.message||e.message||'Request failed'));});
export default api;
