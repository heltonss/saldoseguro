import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntriesComponent } from './entries/entries.component';
import { FinancialInputsComponent } from './financial-inputs.component';

const routes: Routes = [
  {
    path: '',
    component: FinancialInputsComponent,
    children: [
      {
        path: '',
        component: EntriesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialInputsRoutingModule {}
