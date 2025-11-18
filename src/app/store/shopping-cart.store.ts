import { Injectable } from '@angular/core';
import { patchState, signalState } from '@ngrx/signals';
import { Product, ShoppingCartState } from '../models/models';

const initialProductsState: ShoppingCartState = {
  shoppingCartItems: [],
};

@Injectable()
export class ShoppingCartStore {
  readonly state = signalState(initialProductsState);

  addItemToShoppingCart(item: Product): void {
    patchState(this.state, (state) => {
      const itemAlreadyInCart = state.shoppingCartItems.find((p) => p.name === item.name);

      if (itemAlreadyInCart) {
        return {
          shoppingCartItems: state.shoppingCartItems.map((product) =>
            product.name === item.name
              ? { ...product, totalAmount: (product.totalAmount || 0) + 1 }
              : { ...product },
          ),
        };
      }

      return {
        shoppingCartItems: [
          ...state.shoppingCartItems,
          {
            ...item,
            totalAmount: 1,
          },
        ],
      };
    });
  }

  removeItemFromShoppingCart(name: string): void {
    patchState(this.state, (state) => {
      return {
        shoppingCartItems: state.shoppingCartItems.filter((p) => p.name !== name),
      };
    });
  }
}
