import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSetComponent } from './banner-set.component';

describe('BannerSetComponent', () => {
  let component: BannerSetComponent;
  let fixture: ComponentFixture<BannerSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
