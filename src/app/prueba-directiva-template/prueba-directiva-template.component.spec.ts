import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaDirectivaTemplateComponent } from './prueba-directiva-template.component';

describe('PruebaDirectivaTemplateComponent', () => {
  let component: PruebaDirectivaTemplateComponent;
  let fixture: ComponentFixture<PruebaDirectivaTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaDirectivaTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaDirectivaTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
