export interface IProduct {
  id?: number,
  name: string,
  amount: string,
  orderId?: number | null,
}

export interface ITypeMessage {
  type: string,
  message: IProduct[] | IProduct | string
}

export interface ITypes {
  [SUCESS : string]: number,
  CREATED: number
}

export interface IUser {
  username: string,
  vocation: string,
  level: number,
  password: string 
} 
