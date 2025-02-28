import {
  TextInput,
  Button,
  View,
  StyleSheet,
  Image,
  Text,
  Touchable,
  TouchableOpacity,
} from "react-native";

import logo from "../assets/images/scaner.png";  
import { useNavigation } from "expo-router";
import { useHandleAuth } from "@/hooks/useHandleAuth";
import { useState } from "react";

export default function Page() {
  const [email,setEmail] = useState<string>("")
  const [password,setPassword] = useState<string>("")

  const {
    handleLogin,
    router
  } = useHandleAuth()

  const handleLoginAccess = () => {
    const data = {
      email,
      password,
    }
    
    handleLogin(data) 
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        {/* Usando a imagem no componente Image */}
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Solve Scan</Text>
      </View>

      <View>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry
        />
        <View style={styles.container_btns}>
          <Button 
          onPress={() => handleLoginAccess()}
          title="Acessar" />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },

  containerImage: {
    marginVertical: 15,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container_btns: {
    gap: 15
  },
  title: {
    marginTop: -15,
    fontSize: 25,
    fontWeight: "bold",
  },

  input: {
    height: 50,
    borderColor: "#7e7c7c",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 12,
  },

  btn_sub_action: {
      width: "100%",
      alignItems:"center",
      justifyContent:"center"
  },

  logo: {
    width: 150, // Ajuste o tamanho conforme necessário
    height: 150, // Ajuste o tamanho conforme necessário
    resizeMode: "contain", // Para garantir que a imagem seja redimensionada corretamente
  },
});
