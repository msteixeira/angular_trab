import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { EnderecoService } from "../services/endereco.service";
import { Endereco } from "../model/endereco";


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
  endereco : Endereco;
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
  private enderecoService : EnderecoService
  ) {

    this.formGroup = this.formBuilder.group({
      nome : ['',[Validators.required, Validators.minLength(3)]],
      cep : ['',[Validators.required, Validators.minLength(8),Validators.maxLength(8)]],
      logradouro : [''],
      complemento : [''],
      bairro : [''],
      localidade : [''],
      uf : ['']
    });
  }

  ngOnInit() {
  }

  enviar(){
    console.log(this.formGroup.value);
  }

  consultaCep(){
    let cep = this.formGroup.controls["cep"].value;

    this.enderecoService.getEndereco(cep)
      .subscribe(response => {
        this.endereco = response;

        this.formGroup.controls["logradouro"]
        .setValue(this.endereco.logradouro);

         this.formGroup.controls["complemento"]
        .setValue(this.endereco.complemento);

         this.formGroup.controls["bairro"]
        .setValue(this.endereco.bairro);

         this.formGroup.controls["localidade"]
        .setValue(this.endereco.localidade);

         this.formGroup.controls["uf"]
        .setValue(this.endereco.uf);
        
      },error =>{
        alert("cep inválido");
      });
  }
}
