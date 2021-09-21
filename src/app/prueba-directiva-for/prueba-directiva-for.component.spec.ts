import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaDirectivaForComponent } from './prueba-directiva-for.component';

describe('PruebaDirectivaForComponent', () => {
  let component: PruebaDirectivaForComponent;
  let fixture: ComponentFixture<PruebaDirectivaForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaDirectivaForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaDirectivaForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
