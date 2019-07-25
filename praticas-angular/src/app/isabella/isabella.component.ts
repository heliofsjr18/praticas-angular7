import { Validators } from '@angular/forms'
import {FormControl, FormGroup} from '@angular/forms';
import {Component} from '@angular/core';

@Component({
  selector: 'app-isabella',
  templateUrl: './isabella.component.html',
  styleUrls: ['./isabella.component.css']
})

export class IsabellaComponent
 {
   // Instanciando
   formDados = new FormGroup
  ({
    nome: new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern(/[A-Za-z-áéíóúÁÉÍÓÚ]/)]),
    idade: new FormControl('',Validators.required),
    cpf: new FormControl('',[Validators.required,Validators.minLength(11),Validators.pattern(/[0-9]/)]),
    telefone: new FormControl('',[Validators.required,Validators.minLength(11), Validators.pattern(/[0-9]/)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    rua: new FormControl('',[Validators.required,Validators.minLength(4)]),
    cidade: new FormControl('',[Validators.required,Validators.pattern(/[A-Za-z-áéíóúÁÉÍÓÚ]/)]),
    estado: new FormControl('',[Validators.required,Validators.pattern(/[A-Za-z-áéíóúÁÉÍÓÚ]/)]),
  });

//Preenchimento automatico para verificar a validação
  updateProfile() {
    this.formDados.patchValue
    ({
      nome: 'Nome qualquer',
      idade: '40',
      email: 'nome@email.com',
      cpf: '12345678901',
      telefone: '123456789111',
      Endereco: 
      {
        rua: 'Rua tal numero tal',
        cidade: 'cidade',
        estado: 'estado',
      }
    });
  }

/*************  Validação de preenchimento dos campos *************************/
  //NOME
  getErrorMessageNome() {
    var mensagem:string = '';

    if(this.formDados.controls.nome.hasError('required'))
    {
        mensagem = 'O campo é obrigatório';
    }
    else if(this.formDados.controls.nome.hasError('pattern')){
      mensagem = 'Apenas Letras';
    }
    else if(this.formDados.controls.nome.hasError('minlength')){
        mensagem = 'Minimo 4 digitos';
    }
    return mensagem;
  }
  //EMAIL
  getErrorMessageEmail() {
    return this.formDados.controls.email.hasError('required') ? 'O campo é obrigatório' :
        this.formDados.controls.email.hasError('email') ? 'O email não é válido' :
            '';
  }
  //TELEFONE
  getErrorMessageTelefone() {
    var mensagem:string = '';

    if(this.formDados.controls.telefone.hasError('required'))
    {
        mensagem = 'You must enter a value';
    }
    else if(this.formDados.controls.telefone.hasError('pattern')){
      mensagem = 'Apenas numeros';
    }
    else if(this.formDados.controls.telefone.hasError('minlength')){
        mensagem = 'Minimo 11 digitos';
    }
    else if(this.formDados.controls.telefone.hasError('maxlength')){
      mensagem = 'Max 12 digitos';
    }

    return mensagem;
  }
  //CPF
  getErrorMessageCpf() {
    var mensagem:string = '';

    if(this.formDados.controls.cpf.hasError('pattern')){
      mensagem = 'Apenas numeros';
    }
    else if(this.formDados.controls.cpf.hasError('required')){
        mensagem = 'O campo é obrigatório';
    }
     
    else if(this.formDados.controls.cpf.hasError('minlength')){
        mensagem = 'O CPF não é válido';
      }

    return mensagem;
  }
  //RUA
  getErrorMessageRua() {
    return this.formDados.controls.rua.hasError('required') ? 'O campo é obrigatório' :
        this.formDados.controls.rua.hasError('minlength') ? 'Não é um endereço válido' :
            '';
  }
  //CIDADE
  getErrorMessageCidade() {
    return this.formDados.controls.cidade.hasError('required') ? 'O campo é obrigatório' :
        this.formDados.controls.cidade.hasError('pattern') ? 'Apenas letras' :
            '';
  }
  //UF
  getErrorMessageEstado() {
    return this.formDados.controls.estado.hasError('required') ? 'O campo é obrigatório' :
        this.formDados.controls.estado.hasError('pattern') ? 'Apenas letras' :
            '';
  }
/******************  Fim validação *************************/
  
  //Método que salva dados do formulário
  saveData(){
    ;
  }


  //Método que envia dados do formulário para GRID
  onSubmit() {
    console.log(this.formDados.value);
  }

  cleanData(){
    this.formDados.patchValue
    ({
      nome: '',
      idade: '',
      email: ' ',
      cpf: '',
      telefone: '',
      rua: '',
      cidade: '',
      estado: '',
    });
  }

  // Criar Grid
  tiles = [
    {text: 'One', cols: 1, rows: 3, color: '#142A5C'},
    {text: 'Two', cols: 1, rows: 3, color: '#B7A0E8'},
    {text: 'Three', cols: 1, rows: 3, color: '#FF0000'},
    {text: 'Four', cols: 1, rows: 3, color: '#D9EDD9'},
  ];
}