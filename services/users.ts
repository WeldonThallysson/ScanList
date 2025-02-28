import api from "@/constants/config/axios";
import { IResponseAuth, IResponseMessage } from "@/interfaces/services/interface.api.responses";
import {
  IParamsLogin,
  IParamsRegister,
} from "@/interfaces/services/interface.users";

export const login = async ({ email, password }: IParamsLogin) => {
 
    const data = {
      email,
      password,
    };
    return await api.post<IResponseAuth>("/auth/login", data);


};

export const register = async ({ name, email, password }: IParamsRegister) => {
  const data = {
    name,
    email,
    password,
  };
   
    return await api.post<IResponseMessage>("/users", data);
  
};
