import {
  TextInput,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

// Importando a imagem da pasta assets
import logo from "../assets/images/scaner.png"; // Certifique-se de colocar o caminho correto
import { useState } from "react";
import { useHandleAuth } from "@/hooks/useHandleAuth"; 
import { styles } from "@/global/styles/register/styles";

export default function Page() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { handleRegister, loading, router } = useHandleAuth();

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
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleLoginAccess()}
            disabled={loading} 
          >
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Cadastrar</Text>
            )}
          </TouchableOpacity>
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


