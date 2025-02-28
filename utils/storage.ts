import { MMKV } from 'react-native-mmkv';

// Inicializa o MMKV Storage
export const storage = new MMKV();

// Função para salvar o token
export const saveToken = (token: string) => {
  storage.set('access_token', token);
};

// Função para buscar o token
export const getToken = (): string | null => {
  return storage.getString('access_token') || null;
};

// Função para remover o token (para logout, por exemplo)
export const removeToken = () => {
  storage.delete('access_token');
};
