import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaDirectivaClassComponent } from './prueba-directiva-class.component';

describe('PruebaDirectivaClassComponent', () => {
  let component: PruebaDirectivaClassComponent;
  let fixture: ComponentFixture<PruebaDirectivaClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaDirectivaClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaDirectivaClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
