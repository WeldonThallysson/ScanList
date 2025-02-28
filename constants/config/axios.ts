
import { getToken } from '@/utils/storage'
import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:3000"
})


api.interceptors.request.use( 
    async (config) => {
        const token = getToken()
        if(token){
            config.headers.Authorization = token
        }
        return config

    }, (err) => {
            return Promise.reject(err)
        
    }

)

export default api