import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscalaPage } from './escala.page';

const routes: Routes = [
  {
    path: '',
    component: EscalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscalaPageRoutingModule {}
