"use server"

import { ErrorResponseSchema, OrderSchema, SuccessResponseSchema } from "@/src/shemas"
import { revalidatePath, revalidateTag } from "next/cache"

export async function submitOrder(data: unknown) {
    const order = OrderSchema.parse(data)
    const url = `${process.env.NEXT_PUBLIC_API_URL}/transactions`
    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({...order})
    })
    const text = await req.text()
    const json = text ? JSON.parse(text) : null
    if(!req.ok) {
        if (json) {
            const errors = ErrorResponseSchema.parse(json)
            return {
                errors: errors.message.map(issue => issue),
                success: ''
            }
        }
        return {
            errors: ['Error al procesar la orden'],
            success: ''
        }
    }
    if (json) {
        const success = SuccessResponseSchema.parse(json)
        revalidatePath('/(store)/[categoryId]','page')
        return {
            errors: [],
            success: success.message
        }
    }
    revalidatePath('/(store)/[categoryId]','page')
    return {
        errors: [],
        success: 'Venta Almacenada Correctamente'
    }
}

