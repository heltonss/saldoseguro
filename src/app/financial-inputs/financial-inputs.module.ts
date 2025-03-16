import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EntriesComponent } from './entries/entries.component';
import { FinancialInputsRoutingModule } from './financial-inputs-routing.module';
import { FinancialInputsComponent } from './financial-inputs.component';

@NgModule({
  imports: [CommonModule, FinancialInputsRoutingModule],
  declarations: [EntriesComponent, FinancialInputsComponent],
})
export class FinancialInputsModule {}
