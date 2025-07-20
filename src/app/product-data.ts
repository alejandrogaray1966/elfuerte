import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './prod-list/Product';
import { Observable, tap } from 'rxjs';

const URL = 'https://687c8a20918b6422432e896a.mockapi.io/elfuerte/articles';

@Injectable({
  providedIn: 'root'
})

export class ProductData {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(URL)
            .pipe(
              tap( (articulos: Product[]) => 
                    articulos.forEach(articulo =>
                                      articulo.quantity = 0
                                      )
                  )
            )
  }

}
