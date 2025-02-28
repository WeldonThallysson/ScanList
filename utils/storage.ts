import AsyncStorage from "@react-native-async-storage/async-storage"

// Função para salvar o token
export const saveToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('access_token', token);
  } catch (e) {
    console.error('Erro ao salvar o token:', e);
  }
};

// Função para buscar o token
export const getToken = async (): Promise<string | null> => {
  try {
    const token = await AsyncStorage.getItem('access_token');
    return token;
  } catch (e) {
    console.error('Erro ao buscar o token:', e);
    return null;
  }
};

// Função para remover o token (para logout, por exemplo)
export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('access_token');
  } catch (e) {
    console.error('Erro ao remover o token:', e);
  }
};
