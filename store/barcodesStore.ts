import { IResponseBarcodes } from '@/interfaces/services/interface.barcode';
import {create} from 'zustand'

interface  IUseBarcodesStore {
     dataBarcodes: IResponseBarcodes[],
     detailsBarcode: IResponseBarcodes | null,
     handleBarcodes: (items: IResponseBarcodes[]) =>  void
     handleDetailsBarcode: (items: IResponseBarcodes | null) =>  void
}

export const useBarcodesStore = create<IUseBarcodesStore>((set) => ({
        dataBarcodes: [],
        detailsBarcode: null,
        handleBarcodes: (items) => set({dataBarcodes: items}),
        handleDetailsBarcode: (item) => set({detailsBarcode: item})
}));