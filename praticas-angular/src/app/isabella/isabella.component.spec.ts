import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsabellaComponent } from './isabella.component';

describe('IsabellaComponent', () => {
  let component: IsabellaComponent;
  let fixture: ComponentFixture<IsabellaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsabellaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsabellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
