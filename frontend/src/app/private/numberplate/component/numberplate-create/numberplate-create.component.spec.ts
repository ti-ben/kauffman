import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberplateCreateComponent } from './numberplate-create.component';

describe('NumberplateCreateComponent', () => {
  let component: NumberplateCreateComponent;
  let fixture: ComponentFixture<NumberplateCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberplateCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberplateCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
