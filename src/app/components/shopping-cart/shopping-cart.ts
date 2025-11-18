import { Component, computed, inject } from '@angular/core';
import { ShoppingCartStore } from '../../store/shopping-cart.store';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  imports: [CurrencyPipe],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.css',
})
export class ShoppingCart {
  #shoppingCartStore = inject(ShoppingCartStore);

  public shoppingCartItem = this.#shoppingCartStore.state;
  public totalPrice = computed(() => {
    return this.shoppingCartItem().shoppingCartItems.reduce((total, item) => {
      return (
        total +
        this.calculateTotalItemPrice(
          item.totalAmount,
          item.defaultPrice,
          item.specialOfferAmount,
          item.specialOfferPrice,
        )
      );
    }, 0);
  });

  calculateTotalItemPrice(
    totalAmount: number,
    singlePrice: number,
    offerSize?: number,
    offerPrice?: number,
  ) {
    if (!offerSize || !offerPrice) {
      return totalAmount * singlePrice;
    }

    const offer = Math.floor(totalAmount / offerSize);
    const remainingItems = totalAmount % offerSize;

    console.log(offer);
    return offer * offerPrice + remainingItems * singlePrice;
  }

  public removeItemFromShoppingCart(name: string) {
    this.#shoppingCartStore.removeItemFromShoppingCart(name);
  }
}
