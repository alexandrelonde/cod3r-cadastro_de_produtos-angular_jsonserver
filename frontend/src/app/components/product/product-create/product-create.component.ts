import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.scss'
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {


  }

  createProduct(): void {
    this.productService.showMessage('Produto Criado!');
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}

/*
  Ou seja, quando eu estou injetando o productService, eu posso
  usar o método dele dentro da minha classe ProductCreateComponent.

  this.productService.showOnConsole('Teste...');
  'Teste...' é a string que é passada como parâmetro para o método
  do service.
*/
