import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.scss'
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

  }

  createProduct(): void {
    // Converter o dado do preenchimento do campo de string para number
    if (this.product.price !== null) {
      this.product.price = Number(this.product.price);
    }
    // Chamamos o método create() que está na service, se subscrevendo no mesmo
    this.productService.create(this.product).subscribe((newProduct) => {
      // Quando chegar a reposta, executamos este outro método da service
      console.log(newProduct); // Verificando o retorno do backend
      this.productService.showMessage('Produto Criado!');
      // e então executamos esse outro método
      this.router.navigate(['/products']);
    })
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
