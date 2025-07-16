export interface Product {
  image: string
  name: string
  description: string
  price: number
}

export interface CartItem {
  product: Product
  quantity: number
}


