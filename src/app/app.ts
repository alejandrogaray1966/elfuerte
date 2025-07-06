import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdList } from "./prod-list/prod-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProdList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Distribuidora: El Fuerte';
}
