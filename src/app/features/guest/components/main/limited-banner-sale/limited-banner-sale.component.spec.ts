import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedBannerSaleComponent } from './limited-banner-sale.component';

describe('LimitedBannerSaleComponent', () => {
  let component: LimitedBannerSaleComponent;
  let fixture: ComponentFixture<LimitedBannerSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitedBannerSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitedBannerSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
