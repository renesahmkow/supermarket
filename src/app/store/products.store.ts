import { Injectable } from '@angular/core';
import { patchState, signalState } from '@ngrx/signals';
import { Product, ProductState } from '../models/models';

const initialProductsState: ProductState = {
  products: [
    {
      name: 'Apple',
      defaultPrice: 30,
      specialOfferAmount: 2,
      specialOfferPrice: 45,
    },
    {
      name: 'Banana',
      defaultPrice: 50,
      specialOfferAmount: 3,
      specialOfferPrice: 130,
    },
    {
      name: 'Peach',
      defaultPrice: 60,
    },
    {
      name: 'Kiwi',
      defaultPrice: 20,
    },
  ],
};

@Injectable()
export class ProductsStore {
  readonly state = signalState(initialProductsState);

  addProduct(product: Product): void {
    patchState(this.state, (state) => {
      return {
        products: [...state.products, product],
      };
    });
  }

  updateProduct(product: Product): void {
    patchState(this.state, (state) => {
      return {
        products: state.products.map((item) =>
          item.name === product.name ? { ...item, ...product } : item,
        ),
      };
    });
  }

  removeProduct(name: string): void {
    patchState(this.state, (state) => {
      return {
        products: state.products.filter((p) => p.name !== name),
      };
    });
  }
}
