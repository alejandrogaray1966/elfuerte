import { Injectable } from '@angular/core';
import { Product } from './prod-list/Product';

@Injectable({
  providedIn: 'root'
})

export class ProdCarri {

  listProduct: Product[] = []

  constructor() { }

  addListProduct(producNew: Product) {
    let productFound: Product | undefined = this.listProduct.find((valor) => valor.name == producNew.name);
    if (!productFound) {
      this.listProduct.push(producNew);
    } else {
      productFound.quantity += producNew.quantity;
    }
  }

}
