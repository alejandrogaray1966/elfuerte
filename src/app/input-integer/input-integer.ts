import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-integer',
  imports: [FormsModule],
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss'
})

export class InputInteger {

  @Input()
    quantity!: number;

  @Input()
    max!: number;

  @Output()
    quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
    maxReached: EventEmitter<string> = new EventEmitter<string>();

  decreaseQuantity():void {
      if (this.quantity > 0) {
        this.quantity -- ;
        this.quantityChange.emit(this.quantity);
      }
  }

  increaseQuantity():void {
      if (this.quantity < this.max ) {
        this.quantity ++ ;
        this.quantityChange.emit(this.quantity);
      } else {
        this.maxReached.emit("Se alcanzó el máximo...")
      }
  }

  changeQuantity(event: Event): void {
      const input = (event.target as HTMLInputElement).value;
      const parsed = parseInt(input, 10);
      if (isNaN(parsed)) {
        this.quantity = 0; 
      } else if (parsed < 0) {
        this.quantity = 0;
      } else if (parsed > this.max) {
        this.quantity = this.max;
      } else {
        this.quantity = parsed;
      }
      this.quantityChange.emit(this.quantity);
  }

}
