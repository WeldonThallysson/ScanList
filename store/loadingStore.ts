import {create} from 'zustand'

interface  IUseLoadingStore {
    loading: boolean,
     handleLoading: (status: boolean) =>  void
}

export const useLoadingStore = create<IUseLoadingStore>((set) => ({
    loading: false,
    handleLoading: (status) => set({ loading: status }),  
}));