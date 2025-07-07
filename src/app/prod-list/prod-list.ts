import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-prod-list',
  imports: [CurrencyPipe],
  templateUrl: './prod-list.html',
  styleUrl: './prod-list.scss'
})

export class ProdList {
  product = {
            "name":"Red Point",
            "type":"Cigarrillo",
            "price":2400,
            "stock":7,
            "image":"assets/img/redpoint.jpeg",
  }
}
