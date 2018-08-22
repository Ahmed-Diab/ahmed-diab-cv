import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesShopComponent } from './shoes-shop.component';

describe('ShoesShopComponent', () => {
  let component: ShoesShopComponent;
  let fixture: ComponentFixture<ShoesShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoesShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
