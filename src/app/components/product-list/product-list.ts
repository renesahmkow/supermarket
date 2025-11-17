import { Component, inject } from '@angular/core';
import { ShoppingCart } from '../shopping-cart/shopping-cart';
import { ProductsStore } from '../../store/products.store';
import { CurrencyPipe } from '@angular/common';
import { ShoppingCartItem, ShoppingCartStore } from '../../store/shopping-cart.store';

@Component({
  selector: 'app-product-list',
  imports: [ShoppingCart, CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  #productStore = inject(ProductsStore);
  #shoppingCartStore = inject(ShoppingCartStore);

  products = this.#productStore.state().products;

  addToShoppingCart(product: ShoppingCartItem) {
    this.#shoppingCartStore.addItemToShoppingCart(product);
  }
}
