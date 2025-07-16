import type { CartItem } from "../types";

export function CartItem({ product, quantity }: CartItem) {
    return (

        <div className="cart-item">
            <div className="cart-item-image">{product.image}</div>
            <div className="cart-item-info">
                <div className="cart-item-name">{product.name}</div>
                <div className="cart-item-price">{product.price}</div>
            </div>
            <div className="quantity-controls">
                <button className="quantity-btn">-</button>
                <span className="quantity-display">{quantity}</span>
                <button className="quantity-btn">+</button>
            </div>
            <button className="btn btn-danger btn-small">Remove</button>
        </div>

    )
}