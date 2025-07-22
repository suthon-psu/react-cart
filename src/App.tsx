import { useState } from 'react'
import './App.css'
import { CardHeader } from './components/CartHeader'
import { CartItemCard } from './components/CartItemCard'
import { CartSummary } from './components/CartSummary'
import { ProductCard } from './components/ProductCard'
import type { CartItem, Product } from './types'

function App() {
  const products: Product[] = [
    {
      image: '📱',
      name: 'iPhone 15 Pro',
      description: 'Latest iPhone with A17 Pro chip, titanium design, and advanced camera system',
      price: 999.00
    },
    {
      image: '💻',
      name: 'MacBook Pro 16"',
      description: 'Powerful laptop with M2 Pro chip, Liquid Retina XDR display, and long battery life',
      price: 2499.00
    },
    {
      image: '⌚',
      name: 'Apple Watch Series 9',
      description: 'Smartwatch with fitness tracking, heart rate monitoring, and customizable bands',
      price: 399.00
    },
    {
      image: '🎧',
      name: 'AirPods Pro 2nd Gen',
      description: 'Wireless earbuds with active noise cancellation and spatial audio',
      price: 249.00
    },
    {
      image: '📺',
      name: 'Apple TV 4K',
      description: 'Streaming device with 4K HDR support, Apple Arcade, and Siri integration',
      price: 179.00
    },
    {
      image: '🖥️',
      name: 'iMac 24"',
      description: 'All-in-one desktop with M1 chip, 4.5K Retina display, and vibrant colors',
      price: 1299.00
    }
  ]

  // const cartItems = [
  //   {
  //     product: products[0],
  //     quantity: 1
  //   },
  //   {
  //     product: products[1],
  //     quantity: 1
  //   },
  //   {
  //     product: products[2],
  //     quantity: 1
  //   }
  // ]

  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const onAddProduct = (product: Product) => {
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

  return (
    <>
      <div className="app-container">
        <CardHeader />
        <div className="main-content">
          <div className="product-section">
            <h2 className="section-title">Featured Products</h2>
            <div className="product-grid">
              {/* <ProductCard {...product}/> */}
              {products.map((product, index) => (
                <ProductCard key={index} product={product} onAddProduct={onAddProduct}/>
              ))}
            </div>
          </div>
          <div className="cart-section">
            <h2 className="section-title">Shopping Cart</h2>
            <CartSummary cartItems={cartItems}/>
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <CartItemCard key={index} {...item} />
              ))}
            </div>
            <div className="mt-16">
              <button className="btn btn-secondary btn-full">Clear Cart</button>
              <button className="btn btn-primary btn-full mt-16">Checkout</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App


