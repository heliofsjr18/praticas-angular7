import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-isabella',
  templateUrl: './isabella.component.html',
  styleUrls: ['./isabella.component.css']
})
/*export class IsabellaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}*/

  export class IsabellaComponent {
    nome = new FormControl('');
    cpf = new FormControl('');
    idade = new FormControl('');
    telefone = new FormControl('');
    
    updateName() {
      this.nome.setValue('Seu nome');
    }
  }

  

