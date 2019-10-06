import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoComercialComponent } from './produto-comercial.component';

describe('ProdutoComercialComponent', () => {
  let component: ProdutoComercialComponent;
  let fixture: ComponentFixture<ProdutoComercialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoComercialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
