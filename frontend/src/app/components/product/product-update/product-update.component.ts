import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.scss'
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }


  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // Sempre que for buscar um produto para atualizar ou deletar
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.productService.readById(id).subscribe(product => {
        this.product = product;
      });
    } else {
      console.error('ID is null');
    }
  }

  /*
    No método acima, veio um erro mostrando que id poderia ser nulo.
    Eu teria a alternativa ou de afirmar que id não seria nulo por
    meio de "!" ou tratar o erro.
    De fato o id não virá nulo por meio da consulta, mas para ficar
    uma solução mais perspicaz preferi trar o erro com "if".
  */

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso!');
      this.router.navigate(['/products']);
    });

  }

  cancel():void {
    this.router.navigate(['/products']);
  }

}
