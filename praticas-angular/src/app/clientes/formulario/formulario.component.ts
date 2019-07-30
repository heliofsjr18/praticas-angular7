import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent
 {
  public myForm: FormGroup
  public people: FormArray

  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.myForm = this.fb.group({
        people: this.fb.array([this.createPerson()]),
    })
}

createPerson(): FormGroup {
    return this.fb.group({
        name: ['', Validators.required],
        age: ['', Validators.required],
        address: ['', Validators.required],
    })
}
public save(): void {
     this.people = this.myForm.get('people') as FormArray
    console.log(this.myForm.getRawValue())
}
public addNewPerson(): void {
  this.people = this.myForm.get('people') as FormArray
  this.people.push(this.createPerson())
}
}


   

