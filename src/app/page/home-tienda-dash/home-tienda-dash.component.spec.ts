import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTiendaDashComponent } from './home-tienda-dash.component';

describe('HomeTiendaDashComponent', () => {
  let component: HomeTiendaDashComponent;
  let fixture: ComponentFixture<HomeTiendaDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTiendaDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTiendaDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
