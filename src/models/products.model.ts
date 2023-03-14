import { RowDataPacket } from "mysql2"
import { IProduct } from "../interfaces"
import connection from "./connection"

const getAllProducts = async (): Promise<IProduct[]> => {
    const [rows] = await connection.execute<RowDataPacket[] & IProduct[]>('SELECT * FROM Trybesmith.products')

    return rows
}

const productsModel = {
    getAllProducts
}

export default productsModel