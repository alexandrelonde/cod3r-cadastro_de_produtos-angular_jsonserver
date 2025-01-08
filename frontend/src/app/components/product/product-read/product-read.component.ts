import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.scss'
})
export class ProductReadComponent implements OnInit{

  products: Product[] = []; // Inicializar como array vazio
  
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.readAll().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }
}
