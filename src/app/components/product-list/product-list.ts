import { Component, inject } from '@angular/core';
import { ShoppingCart } from '../shopping-cart/shopping-cart';
import { ProductsStore } from '../../store/products.store';
import { CurrencyPipe } from '@angular/common';
import { ShoppingCartStore } from '../../store/shopping-cart.store';
import { Product } from '../../models/models';

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

  addToShoppingCart(product: Product) {
    this.#shoppingCartStore.addItemToShoppingCart(product);
  }
}
