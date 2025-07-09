import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Product } from './Product';

@Component({
  selector: 'app-prod-list',
  imports: [CommonModule, CurrencyPipe, UpperCasePipe],
  templateUrl: './prod-list.html',
  styleUrl: './prod-list.scss'
})

export class ProdList {

  products: Product[] = [
    {
      name: 'Red Point',
      type: 'Cigarrillo',
      price: 2400,
      stock: 13,
      image:'assets/img/redpoint.jpeg',
      offer: false,
      quantity: 0,
    },
    {
      name: 'Master',
      type: 'Cigarrillo',
      price: 2600,
      stock: 0,
      image: 'assets/img/master.jpeg',
      offer: false,
      quantity: 0,
    },
    {
      name: 'Kiel',
      type: 'Cigarrillo',
      price: 1300,
      stock: 5,
      image: 'assets/img/kiel.jpeg',
      offer: true,
      quantity: 0,
    },
    {
      name: 'Dolchester',
      type: 'Cigarrillo',
      price: 3000,
      stock: 22,
      image: 'assets/img/dolchester.jpeg',
      offer: false,
      quantity: 0,
    },
    {
      name: 'Kool',
      type: 'Cigarrillo',
      price: 3200,
      stock: 0,
      image: 'assets/img/kool.jpeg',
      offer: false,
      quantity: 0,
    },
  ]

  decreaseQuantity(product:Product):void {
    if (product.quantity > 0)
      product.quantity -- ;
  }

  increaseQuantity(product:Product):void {
    if (product.quantity < product.stock )
      product.quantity ++ ;
  }

}
