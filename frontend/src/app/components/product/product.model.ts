export interface Product {
  id?: number
  name: string
  price: number
}

/*
  No exemplo do professor é utilizado uma interface.
  Um exemplo de model (classe) seria:

  export class ProductModel implements Product {
    id?: number;
    name: string;
    price: number;

    constructor(name: string, price: number, id?: number) {
      this.name = name;
      this.price = price;
      this.id = id;
    }

    // Método para mostrar detalhes do produto
    displayDetails() {
      return `Product: ${this.name}, Price: $${this.price}`;
    }
  }

*/
