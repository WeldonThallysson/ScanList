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

// Importando a imagem da pasta assets
import logo from "../assets/images/scaner.png"; // Certifique-se de colocar o caminho correto
import { useNavigation } from "expo-router";
import { useState } from "react";
import { useHandleAuth } from "@/hooks/useHandleAuth";

export default function Page() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { handleRegister, router } = useHandleAuth();

  const handleLoginAccess = () => {
    const data = {
      name,
      email,
      password,
    };

    handleRegister(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        {/* Usando a imagem no componente Image */}
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Area de Cadastro</Text>
      </View>

      <View>
        <TextInput
          value={name}
          onChangeText={(value) => setName(value)}
          placeholder="Nome"
          style={styles.input}
        />
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
          <Button
            onPress={() => {
              handleLoginAccess();
            }}
            title="Acessar"
          />
          <TouchableOpacity
            onPress={() => {
              router.push("/");
            }}
            style={styles.btn_sub_action}
          >
            <Text>Já possui uma conta? Acesse!</Text>
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
    gap: 15,
  },
  title: {
    marginTop: -10,
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
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 150, // Ajuste o tamanho conforme necessário
    height: 150, // Ajuste o tamanho conforme necessário
    resizeMode: "contain", // Para garantir que a imagem seja redimensionada corretamente
  },
});
