import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberplateComponent } from './numberplate.component';

describe('NumberplateComponent', () => {
  let component: NumberplateComponent;
  let fixture: ComponentFixture<NumberplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
