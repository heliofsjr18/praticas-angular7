import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent
 {
   formDados = new FormGroup
  ({
    nome: new FormControl('',Validators.required),
    idade: new FormControl('',Validators.required),
    cpf: new FormControl('',[Validators.required,Validators.minLength(7)]),
    telefone: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    
    Endereco: new FormGroup({
    rua: new FormControl('',Validators.required),
    cidade: new FormControl('',Validators.required),
    estado: new FormControl('',Validators.required)
  })
  });

   onSubmit() 
  {
    // TODO: Use EventEmitter with form value
    console.warn(this.formDados.value);
  }

  updateProfile() {
    this.formDados.patchValue
    ({
      nome: 'Nome qualquer',
      idade: '40',
      email: 'nome@email.com',
      cpf: '1234567',
      telefone: '123456789',
      Endereco: 
      {
        rua: 'Rua tal numero tal',
        cidade: 'cidade',
        estado: 'estado',
      }
    });
  }
  
}


   

