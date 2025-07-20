import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Product } from './Product';
import { InputInteger } from "../input-integer/input-integer";
import { ProdCarri } from '../prod-carri';
import { ProductData } from '../product-data';

@Component({
  selector: 'app-prod-list',
  imports: [CommonModule, CurrencyPipe, UpperCasePipe, InputInteger],
  templateUrl: './prod-list.html',
  styleUrl: './prod-list.scss'
})

export class ProdList {

  products: Product[] = []

  constructor(
    private ProdCarri: ProdCarri,
    private ProductData: ProductData
  ){}

  ngOnInit(): void {
    this.ProductData.getAll()
    .subscribe(articulos => this.products = articulos)
  }

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
