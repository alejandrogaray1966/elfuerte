import { Component } from '@angular/core';
import { ProdList } from "../prod-list/prod-list";
import { CarriList } from "../carri-list/carri-list";


@Component({
  selector: 'app-tobuy',
  imports: [ProdList, CarriList],
  templateUrl: './tobuy.html',
  styleUrl: './tobuy.scss'
})

export class Tobuy {

}
