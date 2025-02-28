import {
  IParamsSearchAll,
  IParamsUpdate,
} from "@/interfaces/services/interface.barcode";
import {
  registerBarCode,
  searchAllBarCode,
  searchDetailsBarCode,
  updateBarCode,
} from "@/services/barcode";
import { useBarcodesStore } from "@/store/barcodesStore";
import { router } from "expo-router";
import Toast from "react-native-toast-message";

export const useHandleBarcodes = () => {
  const { dataBarcodes, detailsBarcode, handleBarcodes, handleDetailsBarcode } =
    useBarcodesStore();

  const handleRegisterBarcode = async ({ code }: { code: string }) => {
    try {
      const response = await registerBarCode(code);
      const message = response.data.message;
      if (message) {
        Toast.show({
          type: "success",
          position: "top",
          text1: message,
        });
        router.push("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchAllBarCode = async ({
    code,
    description,
  }: IParamsSearchAll) => {
    try {
      const response = await searchAllBarCode({ code, description });

      handleBarcodes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchDetailsBarCode = async ({ id }: { id: number }) => {
    try {
      const response = await searchDetailsBarCode({ id });
      handleDetailsBarcode(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateBarCode = async ({
    id,
    code,
    description,
  }: IParamsUpdate) => {
    try {
      const response = await updateBarCode({ id, code, description });
      const message = response.data.message;
      
      if (message) {
        Toast.show({
          type: "success",
          position: "top",
          text1: message,
        });
        router.push("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    dataBarcodes,
    detailsBarcode,
    handleSearchAllBarCode,
    handleSearchDetailsBarCode,
    handleUpdateBarCode,
    handleRegisterBarcode,
    router,
  };
};
