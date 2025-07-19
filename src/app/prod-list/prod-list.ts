import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Product } from './Product';
import { InputInteger } from "../input-integer/input-integer";
import { ProdCarri } from '../prod-carri';

@Component({
  selector: 'app-prod-list',
  imports: [CommonModule, CurrencyPipe, UpperCasePipe, InputInteger],
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
      name: 'OCB Slim',
      type: 'Filtro',
      price: 1150,
      stock: 65,
      image: 'assets/img/kool.jpeg',
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
      name: 'OCB Negro',
      type: 'Papel',
      price: 700,
      stock: 25,
      image: 'assets/img/kool.jpeg',
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
      name: 'Sairis',
      type: 'Tabaco',
      price: 11400,
      stock: 4,
      image: 'assets/img/kool.jpeg',
      offer: false,
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
    {
      name: 'Richmond',
      type: 'Tabaco',
      price: 8400,
      stock: 15,
      image: 'assets/img/kool.jpeg',
      offer: false,
      quantity: 0,
    },
    {
      name: 'Libelula',
      type: 'Papel',
      price: 700,
      stock: 75,
      image: 'assets/img/kool.jpeg',
      offer: false,
      quantity: 0,
    },
      {
      name: 'OCB Gris',
      type: 'Filtro',
      price: 1250,
      stock: 45,
      image: 'assets/img/kool.jpeg',
      offer: false,
      quantity: 0,
    },
  ]

  constructor(private ProdCarri: ProdCarri){}

  @Input() 
    filterType: string | null = null;

  get filteredProducts(): Product[] {
    if (!this.filterType) {
      return this.products;
    }
    return this.products.filter(p => p.type.toLowerCase() === this.filterType!.toLowerCase());
  }

  maxReached(mensaje: string): void {
      alert(mensaje);
  }

  addProduct(newProduct: Product): void {
    if (newProduct.quantity > 0) {
      this.ProdCarri.addListProduct({...newProduct});
      newProduct.stock -= newProduct.quantity;
      newProduct.quantity = 0;
    } else {
      alert("Se debe seleccionar al menos una unidad...");
    }
  }
  
  restoreStock(product: Product): void {
    const prodInCatalog = this.products.find(p => p.name === product.name);
    if (prodInCatalog) {
      prodInCatalog.stock += product.quantity;
    }
  }

}
