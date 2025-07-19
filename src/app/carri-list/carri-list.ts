import { Component, EventEmitter, Output } from '@angular/core';
import { ProdCarri } from '../prod-carri';
import { Product } from '../prod-list/Product';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carri-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carri-list.html',
  styleUrl: './carri-list.scss'
})
export class CarriList {

  @Output() productRemoved = new EventEmitter<Product>();

  listProduct$: Observable<Product[]>;

  constructor(private ProdCarri: ProdCarri) {
    this.listProduct$ = ProdCarri.listProduct;
  }

  getTotal(products: Product[]): number {
    return products.reduce((acc, prod) => acc + prod.quantity * prod.price, 0);
  }

  removeProduct(product: Product): void {
    this.ProdCarri.removeProduct(product);
    this.productRemoved.emit(product);
  }

}
