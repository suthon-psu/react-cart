import { sumBy } from "lodash"
import { useCart } from "../CartContext"

export function CartSummary() {
    const {cartItems} = useCart()
    const totalItems = cartItems.length
    const subtotal = sumBy(cartItems, (item) => item.product.price * item.quantity)
    const tax = subtotal * 0.07

    return (
        <div className="cart-summary">
            <div className="cart-stats">
                <span>Total Items:</span>
                <span>{totalItems}</span>
            </div>
            <div className="cart-stats">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
            </div>
            <div className="cart-stats">
                <span>Tax:</span>
                <span>{tax}</span>
            </div>
            <div className="cart-stats">
                <span><strong>Total:</strong></span>
                <span className="cart-total">{subtotal + tax}</span>
            </div>
        </div>
    )
}