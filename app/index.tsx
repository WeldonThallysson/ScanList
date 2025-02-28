import {
  TextInput, 
  View, 
  Image,
  Text, 
  TouchableOpacity,
  ActivityIndicator,

} from "react-native";

import logo from "../assets/images/scaner.png";  
import { useHandleAuth } from "@/hooks/useHandleAuth";
import { useEffect, useState } from "react";
import { styles } from "@/global/styles/login/styles";
import { getDataUser } from "@/utils/storage";

export default function  Page() {
  const [email,setEmail] = useState<string>("")
  const [password,setPassword] = useState<string>("")

  const {
    handleLogin,
    router,
    loading,
    
  } = useHandleAuth()

  const handleLoginAccess = () => {
    const data = {
      email,
      password,
    }
    
    handleLogin(data) 
  }


  useEffect(() => {
    const verifyAcess = async () => {
      const token = await getDataUser();
      return token;
    };
  
    const checkAccess = async () => {
      const token = await verifyAcess();
      if (token?.access_token) {
        router.push("/home");
      }
    };
  
    checkAccess();
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>

        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Solve Scan</Text>
      </View>

      <View>
       
            <TextInput
                 value={email}
                 onChangeText={(value) => setEmail(value)}
                 placeholder="Email"
                 style={styles.input}
               />
               <TextInput
                 value={password}
                 onChangeText={(value) => setPassword(value)}
                 placeholder="Senha"
                 style={styles.input}
                 secureTextEntry
               />

        <View style={styles.container_btns}>

        <TouchableOpacity
            style={styles.button}
            onPress={() => handleLoginAccess()}
            disabled={loading} // Desabilita o botão enquanto carrega
          >
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Acessar</Text>
            )}
          </TouchableOpacity>


          <TouchableOpacity
          onPress={() => {
            router.push("/register")
          }} 
          style={styles.btn_sub_action}>
            <Text>Não possui uma conta? Cadastre-se!</Text>
          </TouchableOpacity>
        </View>
      
      </View>
    </View>
  );
}

