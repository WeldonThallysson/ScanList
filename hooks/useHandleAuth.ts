import { IParamsLogin, IParamsRegister } from "@/interfaces/services/interface.users"
import { login, register } from "@/services/users"

import { useLoadingStore } from "@/store/loadingStore";
import { removeUser, saveDataUser } from "@/utils/storage";
import { router } from "expo-router";
import Toast from 'react-native-toast-message';


export const useHandleAuth = () => {
      const {loading,handleLoading} = useLoadingStore()
 
    const handleLogin = async ({email,password}: IParamsLogin) => {
      handleLoading(true)
        try {
          const response = await login({
            email,
            password
          })
          const data = response.data;
          if (data) {
            saveDataUser(data);
            handleLoading(false) 
           Toast.show({
            type: 'success', 
            position: 'top', 
            text1: "Login realizado com sucesso",
            
           
          }) 
            router.push('/home'); 
          }
        } catch (error) {
          console.log(error)
          handleLoading(false)
        }
      };

    
    const handleRegister = async ({name, email,password}: IParamsRegister) => {
      handleLoading(true)
        const data = {
            name,
            email,
            password
        }

        try {
        
          const response = await register(data)
          if (response) {
           
            Toast.show({
              type: 'success', 
              position: 'top', 
              text1: response.data.message,
            }) 
            handleLoading(false)
            router.push('/');
          }
        } catch (error) {
          handleLoading(false)
          console.log(error)
        }
    }


    const handleLogout = async () => {
      await removeUser();  // Atualiza o estado de autenticação após o logout
      router.push('/'); // Redireciona para a página inicial
    };

    return {
        handleLogin,
        handleRegister,
        handleLogout,
        
        loading,
        router
    }
}