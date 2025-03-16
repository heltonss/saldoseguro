import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialInputsComponent } from './financial-inputs.component';

describe('FinancialInputsComponent', () => {
  let component: FinancialInputsComponent;
  let fixture: ComponentFixture<FinancialInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinancialInputsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
