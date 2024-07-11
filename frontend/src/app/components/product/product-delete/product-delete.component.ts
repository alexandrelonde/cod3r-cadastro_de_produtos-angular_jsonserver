import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.scss'
})
export class ProductDeleteComponent implements OnInit{

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

  deleteProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.productService.delete(id).subscribe(() => {
        this.productService.showMessage('Produto excluido com sucesso!');
        this.router.navigate(['/products']);
      });
    } else {
      console.error('ID is null');
    }

  }

  cancel():void {
    this.router.navigate(['/products']);
  }

}
