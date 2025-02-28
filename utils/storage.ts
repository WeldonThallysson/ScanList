import { IResponseAuth } from "@/interfaces/services/interface.api.responses";
import AsyncStorage from "@react-native-async-storage/async-storage"

export const saveDataUser = async (data: {id: number, access_token: string}) => {
  try {
    await AsyncStorage.setItem('data', JSON.stringify(data));
  } catch (e) {
    console.error('Erro ao salvar dados do usuário:', e);
  }
};

export const getDataUser = async (): Promise<IResponseAuth | null> => {
  try {
    const dataUser = await AsyncStorage.getItem('data');
    return dataUser && JSON.parse(dataUser);
  } catch (e) {
    console.error('Erro ao buscar os dados do usuário:', e);
    return null;
  }
};

export const removeUser = async () => {
  try {
    await AsyncStorage.removeItem('data');
  } catch (e) {
    console.error('Erro ao remover o dados do usuário:', e);
  }
};
