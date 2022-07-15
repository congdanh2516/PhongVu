import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorInputFormComponent } from './error-input-form.component';

describe('ErrorInputFormComponent', () => {
  let component: ErrorInputFormComponent;
  let fixture: ComponentFixture<ErrorInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorInputFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
