


export interface IParamsLogin {
        email: string;
        password: string
}

export interface IParamsRegister {
    name: string;
    email: string;
    password: string
}

export interface IResponseUser
    {
        id: number,
        name: string,
        email: string,
        password: string,
        createdAt:string,
        updatedAt:string
    } 
 