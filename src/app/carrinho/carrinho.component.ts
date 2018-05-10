import { Component, OnInit } from '@angular/core';
import { Produto } from "../model/produto";
import { StorageService } from "../services/storage.service";

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  carrinho: Produto[] = new Array<Produto>(); // carrinho : array<Produto>;

  constructor(public storage: StorageService) {
    this.carrinho = storage.getCarrinho()
  }

  ngOnInit() {
  }

  remove(produto: Produto) {
    this.carrinho = this.carrinho.filter(item => item.id != produto.id);
    this.storage.setCarrinho(this.carrinho);
  }

}
