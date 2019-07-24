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


   formDados = new FormGroup
  ({
    nome: new FormControl('',Validators.required),
    idade: new FormControl('',Validators.required),
    cpf: new FormControl('',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]),
    telefone: new FormControl('',Validators.required),
    area: new FormControl('',[Validators.minLength(3),Validators.minLength(3)]),
    
    exchange: new FormControl('',[Validators.minLength(4),Validators.minLength(5)]),
    subscriber: new FormControl('',[Validators.minLength(4),Validators.minLength(4)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    
    Endereco: new FormGroup({
    rua: new FormControl('',Validators.required),
    cidade: new FormControl('',Validators.required),
    estado: new FormControl('',Validators.required)
  })
  });

   onSubmit() 
  {
    
    console.warn(this.formDados.value);
  }
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
  getErrorMessage() {
    return this.formDados.controls.email.hasError('required') ? 'You must enter a value' :
        this.formDados.controls.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getErrorMessageTelefone() {
    return this.formDados.controls.telefone.hasError('required') ? 'You must enter a value' :
        this.formDados.controls.telefone.hasError('telefone') ? 'Not a valid number' :
            '';
  }

  
}