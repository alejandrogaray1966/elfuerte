import { Component } from '@angular/core';
import { ProdCarri } from '../prod-carri';

@Component({
  selector: 'app-carri-list',
  imports: [],
  templateUrl: './carri-list.html',
  styleUrl: './carri-list.scss'
})

export class CarriList {

  constructor(private ProdCarri: ProdCarri) {
  }

}
