import {
  IParamsSearchAll,
  IParamsUpdate,
} from "@/interfaces/services/interface.barcode";
import {
  deleteBarCode,
  registerBarCode,
  searchAllBarCode,
  searchDetailsBarCode,
  updateBarCode,
} from "@/services/barcode";
import { useBarcodesStore } from "@/store/barcodesStore";
import { useLoadingStore } from "@/store/loadingStore";
import { router } from "expo-router";
import Toast from "react-native-toast-message";

export const useHandleBarcodes = () => {
  const { dataBarcodes, detailsBarcode, handleBarcodes, handleDetailsBarcode } = useBarcodesStore();
  const {loading, handleLoading} = useLoadingStore()
    
  const handleRegisterBarcode = async ({ code }: { code: string }) => {
    try {
      const response = await registerBarCode(code);
      const message = response.data.message;
      if (message) {
        handleSearchAllBarCode({});
        Toast.show({
          type: "success",
          position: "top",
          text1: message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchAllBarCode = async ({
    code,
    description,
  }: IParamsSearchAll) => {
    handleLoading(true)
    try {
      const response = await searchAllBarCode({ code, description });
      handleLoading(false)
      handleBarcodes(response.data);
    } catch (error) {
      handleLoading(false)
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
      handleSearchAllBarCode({})

      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteBarCode = async ({ id }: { id: number }) => {
    try {
      const response = await deleteBarCode(id);
      const message = response.data.message;

      if (message) {
        Toast.show({
          type: "success",
          position: "top",
          text1: message,
        });
        handleSearchAllBarCode({})
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
    handleDeleteBarCode,
    handleUpdateBarCode,
    handleRegisterBarcode,
    loading,
    router,
  };
};
