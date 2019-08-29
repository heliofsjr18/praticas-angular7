import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PauloComponent } from './paulo.component';

describe('PauloComponent', () => {
  let component: PauloComponent;
  let fixture: ComponentFixture<PauloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PauloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PauloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
