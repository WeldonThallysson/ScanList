import api from "@/constants/config/axios"
import { IResponseMessage } from "@/interfaces/services/interface.api.responses"
import { IParamsSearchAll, IParamsUpdate } from "@/interfaces/services/interface.barcode"

export const searchAllBarCode = async ({code,description}: IParamsSearchAll) => {
    try {
        const params = {
            code,
            description
        }
        return await api.get("/barcodes", {params})
    } catch (err) {
        return err
    }
}

export const searchDetailsBarCode = async ({id}: {id: number}) => {
    try {
        return await api.get(`/barcodes/${id}`, )
    } catch (err) {
        return err
    }
}

export const registerBarCode = async (code: string ) => {
    try {
        const data = {
            code
        }

        return await api.post<IResponseMessage>("/barcodes", data)
    } catch (err) {
        return err
    }
}


export const updateBarCode = async ({id, code,description}: IParamsUpdate) => {
    try {
        const data = {
            id, 
            code,
            description
        }
        return await api.put<IResponseMessage>("/barcodes", data)
    } catch (err) {
        return err
    }
}

export const deleteBarCode = async (id: number) => {
    try {
        return await api.delete<IResponseMessage>(`/barcodes/${id}`)
    } catch (err) {
        return err
    }
}