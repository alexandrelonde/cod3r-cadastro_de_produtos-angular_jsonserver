import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'ok', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }




}

/*
  O decorator @Injectable significa que essa classe (service)
  pode ser injetada em outras classes.

*/
