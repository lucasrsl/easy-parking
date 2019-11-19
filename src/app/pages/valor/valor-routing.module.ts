import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValorPage } from './valor.page';

const routes: Routes = [
  {
    path: '',
    component: ValorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValorPageRoutingModule {}
