import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaidaPage } from './saida.page';

const routes: Routes = [
  {
    path: '',
    component: SaidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaidaPageRoutingModule {}
