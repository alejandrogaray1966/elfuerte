import { Component } from '@angular/core';

@Component({
  selector: 'app-prod-list',
  imports: [],
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
