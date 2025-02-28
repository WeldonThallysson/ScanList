
import { getToken } from '@/utils/storage'
import axios from 'axios'
import Toast from 'react-native-toast-message'

const api = axios.create({
    baseURL: "https://scan-list.onrender.com"
})
 
api.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
    (response) => response,   
    (error) => {
      if (error.response) { 
        const apiError = error.response.data   
        
 
        Toast.show({
          type: 'error',
          position: 'top',
          text1: apiError.message,  // Mensagem do erro
        })
        
     
        if (apiError.statusCode === 401) { 
        }
      } else if (error.request) { 
        Toast.show({
          type: 'error',
          position: 'top',
          text1: "Erro de conexão com a API", 
        })
      } else {
   
        Toast.show({
          type: 'error',
          position: 'top',
          text1: "Erro desconhecido", 
        })
      }
      
      return Promise.reject(error)
    }
)

export default api