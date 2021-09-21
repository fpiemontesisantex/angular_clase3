import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaTwoWayBindingComponent } from './prueba-two-way-binding.component';

describe('PruebaTwoWayBindingComponent', () => {
  let component: PruebaTwoWayBindingComponent;
  let fixture: ComponentFixture<PruebaTwoWayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaTwoWayBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
