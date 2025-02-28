

 
 
 
export interface IParamsSearchAll {
    code: string,
    description: string
}

export interface IParamsUpdate {
    id: number,
    code: string,
    description: string
}


export interface IResponseBarcodes
    {
        id: number,
        name: string,
        email: string,
        password: string,
        createdAt:string,
        updatedAt:string
    } 
 