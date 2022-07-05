import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBannerSaleComponent } from './category-banner-sale.component';

describe('CategoryBannerSaleComponent', () => {
  let component: CategoryBannerSaleComponent;
  let fixture: ComponentFixture<CategoryBannerSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryBannerSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryBannerSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
