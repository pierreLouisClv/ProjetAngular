import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationFormComponentComponent } from './simulation-form-component.component';

describe('SimulationFormComponentComponent', () => {
  let component: SimulationFormComponentComponent;
  let fixture: ComponentFixture<SimulationFormComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimulationFormComponentComponent]
    });
    fixture = TestBed.createComponent(SimulationFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
