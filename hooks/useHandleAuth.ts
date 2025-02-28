import { IParamsLogin, IParamsRegister } from "@/interfaces/services/interface.users"
import { login, register } from "@/services/users"
import { saveToken } from "@/utils/storage";
import { router } from "expo-router";
import { Alert } from "react-native";



export const useHandleAuth = () => {
    

    const handleLogin = async ({email,password}: IParamsLogin) => {
        const data = {
            email,
            password
        }

        try {
          const response = await login(data)
          const token = response.data.access_token;
    
          if (token) {
            saveToken(token);
            Alert.alert('Login realizado com sucesso!');
            router.push('/home'); 
          }
        } catch (error) {
          Alert.alert('Erro no login', 'Verifique suas credenciais.');
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