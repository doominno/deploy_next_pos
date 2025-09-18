"use client"

import { Product } from "@/src/shemas"
import { useStore } from '@/src/store'

export default function AddProductButton({product}:{product: Product}){

    const addtoCart = useStore(state => state.addToCart)
    return (
        <button
                type="button"
                className="absolute top-5 -right-3 z-10 cursor-pointer hover:scale-110 transition-transform"
                onClick={() => {
                    addtoCart(product);
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 bg-indigo-600 rounded-full text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
            
        
    )
}