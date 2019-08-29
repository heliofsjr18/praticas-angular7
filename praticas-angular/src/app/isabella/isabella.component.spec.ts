import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import{ By } from '@angular/platform-browser';

import { IsabellaComponent } from './isabella.component';
import { MatFormFieldModule, MatButtonModule, MatSelectModule, MatInputModule, MatIconModule, MatTableModule } from '@angular/material';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('IsabellaComponent', () => {
  let component: IsabellaComponent;
  let fixture: ComponentFixture<IsabellaComponent>; // detecta alterações
  // let debugElement: DebugElement;
  // let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsabellaComponent],
      imports: [BrowserAnimationsModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSelectModule,
        MatInputModule,
        MatIconModule,
        MatTableModule]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(IsabellaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      })
    }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(IsabellaComponent);
  //   component = fixture.componentInstance;
  //   debugElement = fixture.debugElement.query(By.css('ng-container matColumnDef="nome"'));
  // });

  it('verificar se dados estão sendo enviados para tela',() =>{
    let fb: FormBuilder = new FormBuilder();

    component.formDados = fb.group({
      nome: ['teste'],
      idade: ['teste'],
      cpf: ['teste'],
      telefone: ['teste'],
      email: ['teste'],
      rua: ['teste'],
      cidade: ['teste'],
      estado: ['teste']
    });

    expect(component).toBeTruthy;
  });
});
