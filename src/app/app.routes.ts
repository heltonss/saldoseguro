import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'entradas',
    loadChildren: () =>
      import('./financial-inputs/financial-inputs.module').then(
        (m) => m.FinancialInputsModule
      ),
  },
];
