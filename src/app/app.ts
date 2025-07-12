import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected title = 'Distribuidora: El Fuerte';
  today: Date = new Date();
}
