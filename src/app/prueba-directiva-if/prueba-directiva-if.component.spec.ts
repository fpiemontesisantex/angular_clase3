import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaDirectivaIfComponent } from './prueba-directiva-if.component';

describe('PruebaDirectivaIfComponent', () => {
  let component: PruebaDirectivaIfComponent;
  let fixture: ComponentFixture<PruebaDirectivaIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaDirectivaIfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaDirectivaIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
