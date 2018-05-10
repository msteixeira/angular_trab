import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { CarrinhoComponent } from "./carrinho/carrinho.component";
import { CadastroComponent } from "./cadastro/cadastro.component";
//import { Pagina2Component } from './pagina2/pagina2.component';

const routes: Routes = [
{ path: '', redirectTo: '/produtos', pathMatch: 'full' },
{ path: 'produtos', component: ProdutosComponent },
{ path: 'carrinho', component: CarrinhoComponent },
{ path: 'cadastro', component: CadastroComponent }

];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})

export class AppRoutingModule {}