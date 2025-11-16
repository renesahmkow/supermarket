import { Component, inject, OnInit } from '@angular/core';
import { ProductsStore } from './store/products.store';

@Component({
  selector: 'app-root',
  imports: [],
  providers: [ProductsStore],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  #store = inject(ProductsStore);

  ngOnInit(): void {
    this.#store.addProduct({
      name: 'Orange',
      defaultPrice: 100,
    });

    this.#store.updateProduct({
      name: 'Apple',
      defaultPrice: 20,
    });

    this.#store.removeProduct('Apple');
  }
}
