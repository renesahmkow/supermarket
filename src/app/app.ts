import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsStore } from './store/products.store';
import { ShoppingCartStore } from './store/shopping-cart.store';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  providers: [ProductsStore, ShoppingCartStore],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
