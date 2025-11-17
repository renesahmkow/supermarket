import { Component, inject } from '@angular/core';
import { ShoppingCartStore } from '../../store/shopping-cart.store';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  imports: [JsonPipe],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.css',
})
export class ShoppingCart {
  #shoppingCartStore = inject(ShoppingCartStore);

  shoppingCartItem = this.#shoppingCartStore.state;
}
