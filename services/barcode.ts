import api from "@/constants/config/axios";
import { IResponseMessage } from "@/interfaces/services/interface.api.responses";
import {
  IParamsSearchAll,
  IParamsUpdate,
  IResponseBarcodes,
} from "@/interfaces/services/interface.barcode";

export const searchAllBarCode = async ({
  code,
  description,
}: IParamsSearchAll) => {
 
    const params = {
      ...(code && {code}),
      ...(description && {description})
    };
    return await api.get<IResponseBarcodes[]>("/barcodes", { params });
};

export const searchDetailsBarCode = async ({ id }: { id: number }) => {
    return await api.get<IResponseBarcodes>(`/barcodes/${id}`);
};

export const registerBarCode = async (code: string) => {
  const data = {
    code,
  };

  return await api.post<IResponseMessage>("/barcodes", data);
};

export const updateBarCode = async ({
  id,
  code,
  description,
}: IParamsUpdate) => {
  const data = {
    id,
    code,
    description,
  };
  return await api.put<IResponseMessage>("/barcodes", data);
};

export const deleteBarCode = async (id: number) => {
  return await api.delete<IResponseMessage>(`/barcodes/${id}`);
};
