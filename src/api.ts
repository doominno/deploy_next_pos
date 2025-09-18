import { TransactionsResponseSchema } from "./shemas"

export async function getSalesByDate(date: string) {
    const url = `/admin/sales/api?transactionDate=${date}`
    console.log('Haciendo petición a:', url)
    const req = await fetch(url)
    console.log('Respuesta del servidor:', req.status)
    const json = await req.json()
    console.log('Datos recibidos:', json)
    const transactions = TransactionsResponseSchema.parse(json)
    return transactions
}