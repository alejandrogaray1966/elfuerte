import { Component, ViewChild } from '@angular/core';
import { ProdList } from "../prod-list/prod-list";
import { CarriList } from "../carri-list/carri-list";
import { Product } from '../prod-list/Product';


@Component({
  selector: 'app-tobuy',
  imports: [ProdList, CarriList],
  templateUrl: './tobuy.html',
  styleUrl: './tobuy.scss'
})

export class Tobuy {

  @ViewChild('prodListRef') prodListComponent!: ProdList;

  handleProductRemoved(product: Product): void {
    this.prodListComponent.restoreStock(product);
  }
  
}
