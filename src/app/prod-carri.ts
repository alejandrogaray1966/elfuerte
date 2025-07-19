import { Injectable } from '@angular/core';
import { Product } from './prod-list/Product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProdCarri {

  private _listProduct$ = new BehaviorSubject<Product[]>([]);
  public listProduct = this._listProduct$.asObservable();

  constructor() {}

  addListProduct(producNew: Product): void {
    const current = this._listProduct$.getValue();
    const existing = current.find(p => p.name === producNew.name);
    let updatedList: Product[];
    if (existing) {
      updatedList = current.map(p =>
        p.name === producNew.name
          ? { ...p, quantity: p.quantity + producNew.quantity }
          : p
      );
    } else {
      updatedList = [...current, producNew];
    }
    this._listProduct$.next(updatedList);
  }

  removeProduct(productSupr: Product): void {
    const current = this._listProduct$.getValue();
    const updated = current.filter(p => p.name !== productSupr.name);
    this._listProduct$.next(updated);
  }
}
