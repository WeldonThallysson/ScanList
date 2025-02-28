import { IParamsLogin, IParamsRegister } from "@/interfaces/services/interface.users"
import { login, register } from "@/services/users"
import { saveToken } from "@/utils/storage";
import { router } from "expo-router";
import { Alert } from "react-native";
import Toast from 'react-native-toast-message';


export const useHandleAuth = () => {
    

    const handleLogin = async ({email,password}: IParamsLogin) => {
        try {
          const response = await login({
            email,
            password
          })
          const token = response.data.access_token;
          if (token) {
           saveToken(token);

           Toast.show({
            type: 'success', 
            position: 'top', 
            text1: "Login realizado com sucesso",
            
           
          }) 
            router.push('/home'); 
          }
        } catch (error) {
          console.log(error)
          
        }
      };

    
    const handleRegister = async ({name, email,password}: IParamsRegister) => {
        const data = {
            name,
            email,
            password
        }

        try {
          const response = await register(data)
          if (response) {
            Alert.alert('Login realizado com sucesso!');
            router.push('/');
          }
        } catch (error) {
          Alert.alert('Erro no login', 'Verifique suas credenciais.');
        }
    }

    return {
        handleLogin,
        handleRegister,
        router
    }
}