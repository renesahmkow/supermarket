import { Injectable } from '@angular/core';
import { signalState } from '@ngrx/signals';
import { ProductState } from '../models/models';

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
}
