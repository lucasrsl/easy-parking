import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValorPageRoutingModule } from './valor-routing.module';

import { ValorPage } from './valor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValorPageRoutingModule
  ],
  declarations: [ValorPage]
})
export class ValorPageModule {}
