import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaDirectivaStyleComponent } from './prueba-directiva-style.component';

describe('PruebaDirectivaStyleComponent', () => {
  let component: PruebaDirectivaStyleComponent;
  let fixture: ComponentFixture<PruebaDirectivaStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaDirectivaStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaDirectivaStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
