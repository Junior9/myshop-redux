import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaComercialComponent } from './tienda-comercial.component';

describe('TiendaComercialComponent', () => {
  let component: TiendaComercialComponent;
  let fixture: ComponentFixture<TiendaComercialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaComercialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
