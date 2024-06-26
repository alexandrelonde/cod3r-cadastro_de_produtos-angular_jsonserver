import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'ok', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  // C - create product
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }

  // R - read product
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }

}

/*
  O decorator @Injectable significa que essa classe (service)
  pode ser injetada em outras classes.

*/
