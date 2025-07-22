import { createContext, useContext, useState, type ReactNode } from "react";
import type { CartItem, Product } from "./types";

interface CartContextType {
    cartItems: CartItem[]

    addToCart: (product: Product) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

interface CartProviderProps {
    children: ReactNode
}

export const CartProvider = ({children}: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    
      const addToCart = (product: Product) => {
        console.log(`adding product ${product.name}`)
        const existingCartItem = cartItems.find(item => item.product.name == product.name)
        if(existingCartItem){
          console.log('existing....')
          existingCartItem.quantity += 1
          setCartItems([...cartItems.filter(item => item.product.name != product.name), existingCartItem])
        }else{
          setCartItems([...cartItems, {product: product, quantity: 1}])
        }
      }
    const contexValue: CartContextType = {
        cartItems,
        addToCart,
    }
    return (
        <CartContext.Provider value={contexValue}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = (): CartContextType => {
    const context = useContext(CartContext)
    if(!context){
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}