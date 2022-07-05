import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstandingBrandComponent } from './outstanding-brand.component';

describe('OutstandingBrandComponent', () => {
  let component: OutstandingBrandComponent;
  let fixture: ComponentFixture<OutstandingBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutstandingBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutstandingBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
