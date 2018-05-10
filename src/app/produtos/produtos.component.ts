import { Component, OnInit } from '@angular/core';
import { Produto } from "../model/produto";
import { PRODUTOS } from "../model/mock-produto";
import { StorageService } from "../services/storage.service";

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {


  produtos: Produto[] = PRODUTOS; //produtos da lista
  carrinho: Produto[]; //produtos recebido no método é adicionado em carrinho
  total: number = 0;

  constructor(public storage: StorageService) {//injetando o service StorageService
    // Não esquecer de declarar o Storage no app.module.ts
    this.carrinho = storage.getCarrinho()
  }

  ngOnInit() {
  }

  addCarrinho(produto: Produto) { // Metodo que recebe o produto
    if (!this.verificarItemCarrinho(produto)) {

      this.carrinho.push(produto);
      this.totalCarrinho();
      this.storage.setCarrinho(this.carrinho);
    }
  }

  totalCarrinho(): void {
    let tot = 0;
    for (let item of this.carrinho) {
      tot = tot + item.preco;
    }
    this.total = tot;
  }

  verificarItemCarrinho(produto: Produto): boolean {
    let existe = false;

    for (let item of this.carrinho) {
      if (item.id === produto.id) {
        existe = true;
      }
    }
    return existe;
  }
}



