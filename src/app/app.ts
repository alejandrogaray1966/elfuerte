import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ProdCarri } from './prod-carri';
import { Product } from './prod-list/Product';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {

  protected title = 'Distribuidora: El Fuerte';
  
  protected today: Date = new Date();

  protected totalItems: number = 0;

  constructor(private prodCarri: ProdCarri) {}

  ngOnInit(): void {
    this.prodCarri.listProduct.subscribe((products: Product[]) => {
      this.totalItems = products.reduce((sum, p) => sum + p.quantity, 0);
    });
  }
  
}
