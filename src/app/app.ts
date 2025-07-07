import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdList } from "./prod-list/prod-list";
import { CarriList } from "./carri-list/carri-list";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  /* standalone: true, */
  /* imports: [RouterOutlet, DatePipe , ProdList, CarriList], */
  imports: [ DatePipe , ProdList, CarriList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected title = 'Distribuidora: El Fuerte';
  today: Date = new Date();
}
