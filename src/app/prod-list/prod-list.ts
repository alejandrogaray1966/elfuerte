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
    },
    {
      name: 'Master',
      type: 'Cigarrillo',
      price: 2600,
      stock: 0,
      image: 'assets/img/master.jpeg',
      offer: false,
    },
    {
      name: 'Kiel',
      type: 'Cigarrillo',
      price: 2800,
      stock: 11,
      image: 'assets/img/kiel.jpeg',
      offer: true,
    },
    {
      name: 'Dolchester',
      type: 'Cigarrillo',
      price: 3000,
      stock: 13,
      image: 'assets/img/dolchester.jpeg',
      offer: false,
    },
    {
      name: 'Kool',
      type: 'Cigarrillo',
      price: 3200,
      stock: 0,
      image: 'assets/img/kool.jpeg',
      offer: false,
    },
  ]
}
