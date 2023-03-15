export interface IProduct {
  id?: number,
  name: string,
  amount: string,
  orderId?: number | null,
}

export interface ITypeMessage {
  type: string 
  message: IProduct[] | IProduct | string
}

export interface ITypes {
  [SUCESS : string]: number,
  CREATED: number,
  INCORRECT_FIELDS: number,
  FIELDS_MISSING: number,
  INCORRECT_TYPE: number,

}

export interface IUser {
  username: string,
  vocation: string,
  level: number,
  password: string 
} 

export interface ILogin {
  username: string,
  password: string 
} 
