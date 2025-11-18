export interface ShoppingCartState {
  shoppingCartItems: ShoppingCartItem[];
}

export interface ShoppingCartItem {
  name: string;
  defaultPrice: number;
  totalAmount: number;
  specialOfferAmount?: number;
  specialOfferPrice?: number;
}

export interface ProductState {
  products: Product[];
}

export interface Product {
  name: string;
  defaultPrice: number;
  specialOfferAmount?: number;
  specialOfferPrice?: number;
}
