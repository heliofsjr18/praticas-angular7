import { User } from './../models/user.model';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
// import 'rxjs/add/observable/of';




@Component({
  selector: 'app-isabella',
  templateUrl: './isabella.component.html',
  styleUrls: ['./isabella.component.css'],
})

export class IsabellaComponent {
  constructor(private fb: FormBuilder) { }
  json: string;
  arr = [{'nome':'meunome', 'idade': 12}];
  displayedColumns = ['nome', 'idade'];

   /******************  Fim validação *************************/

    formDados = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/[A-Za-z-áéíóúÁÉÍÓÚ]/)]],
      idade: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.pattern(/[0-9]/)]],
      telefone: ['', [Validators.required, Validators.minLength(11), Validators.pattern(/[0-9]/)]],
      email: ['', [Validators.required, Validators.email]],
      rua: ['', [Validators.required, Validators.minLength(4)]],
      cidade: ['', [Validators.required, Validators.pattern(/[A-Za-z-áéíóúÁÉÍÓÚ]/)]],
      estado: ['', [Validators.required, Validators.pattern(/[A-Za-z-áéíóúÁÉÍÓÚ]/)]],
    });


  ngOnInit() {
    // this.formDados = this.createPerson();
  }

  /*************  Validação de preenchimento dos campos *************************/
  // NOME
  getErrorMessageNome() {
    let mensagem = '';

    if (this.formDados.controls.nome.hasError('required')) {
      mensagem = 'O campo é obrigatório';
    } else if (this.formDados.controls.nome.hasError('pattern')) {
      mensagem = 'Apenas Letras';
    } else if (this.formDados.controls.nome.hasError('minlength')) {
      mensagem = 'Minimo 4 digitos';
    }
    return mensagem;
  }
  // EMAIL
  getErrorMessageEmail() {
    return this.formDados.controls.email.hasError('required') ? 'O campo é obrigatório' :
      this.formDados.controls.email.hasError('email') ? 'O email não é válido' :
        '';
  }
  // TELEFONE
  getErrorMessageTelefone() {
    let mensagem = '';

    if (this.formDados.controls.telefone.hasError('required')) {
      mensagem = 'O campo é obrigatório';
    } else if (this.formDados.controls.telefone.hasError('pattern')) {
      mensagem = 'Apenas numeros';
    } else if (this.formDados.controls.telefone.hasError('minlength')) {
      mensagem = 'Minimo 11 digitos';
    } else if (this.formDados.controls.telefone.hasError('maxlength')) {
      mensagem = 'Max 12 digitos';
    }

    return mensagem;
  }
  // CPF
  getErrorMessageCpf() {
    let mensagem = '';

    if (this.formDados.controls.cpf.hasError('pattern')) {
      mensagem = 'Apenas numeros';
    } else if (this.formDados.controls.cpf.hasError('required')) {
      mensagem = 'O campo é obrigatório';
    } else if (this.formDados.controls.cpf.hasError('minlength')) {
      mensagem = 'O CPF não é válido';
    }

    return mensagem;
  }
  // RUA
  getErrorMessageRua() {
    return this.formDados.controls.rua.hasError('required') ? 'O campo é obrigatório' :
      this.formDados.controls.rua.hasError('minlength') ? 'Não é um endereço válido' :
        '';
  }
  // CIDADE
  getErrorMessageCidade() {
    return this.formDados.controls.cidade.hasError('required') ? 'O campo é obrigatório' :
      this.formDados.controls.cidade.hasError('pattern') ? 'Apenas letras' :
        '';
  }
  // UF
  getErrorMessageEstado() {
    return this.formDados.controls.estado.hasError('required') ? 'O campo é obrigatório' :
      this.formDados.controls.estado.hasError('pattern') ? 'Apenas letras' :
        '';
  }

  public dataSource = new MatTableDataSource(this.arr);
  i = 1;
  saveData() {
    // this.arr[this.i] = this.formDados.getRawValue();
    this.arr.push(this.formDados.getRawValue());
    this.dataSource.data = this.arr;
    console.log(this.dataSource.data);
    this.i++;
    //const json = JSON.stringify(this.arr);
    // console.log(this.arr);
   }

  //  public myarr = get(this.arr);
  // Limpa campos do formulário
  cleanData() {
    this.i = 0;
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
    // Preenchimento automatico para verificar a validação
    updateProfile() {
      this.formDados.patchValue
        ({
          nome: 'Nome qualquer',
          idade: '40',
          email: 'nome@email.com',
          cpf: '12345678901',
          telefone: '123456789111',
          rua: 'Rua tal numero tal',
          cidade: 'cidade',
          estado: 'esr',
        });
    }
}
