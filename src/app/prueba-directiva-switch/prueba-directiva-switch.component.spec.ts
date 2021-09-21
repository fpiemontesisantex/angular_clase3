import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaDirectivaSwitchComponent } from './prueba-directiva-switch.component';

describe('PruebaDirectivaSwitchComponent', () => {
  let component: PruebaDirectivaSwitchComponent;
  let fixture: ComponentFixture<PruebaDirectivaSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaDirectivaSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaDirectivaSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
