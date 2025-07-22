import type { Product } from "../types";

export interface ProductProps {
  product: Product
  onAddProduct: (product: Product) => void
}

export function ProductCard({ product, onAddProduct }: ProductProps) {
  return <div className="product-card">
    <div className="product-image">{product.image}</div>
    <div className="product-info">
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{product.price}</p>
      <button className="btn btn-primary btn-full" onClick={() => onAddProduct(product)}>Add to Cart</button>
    </div>
  </div>
}