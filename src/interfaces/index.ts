export interface IProduct {
  id?: number,
  name: string,
  amount: string,
  orderId?: number | null,
}

export interface ITypeMessage {
  type: string,
  message: IProduct[] | IProduct
}

export interface ITypes {
  [SUCESS : string]: number,
  CREATED: number
}
