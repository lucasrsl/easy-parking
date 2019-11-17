import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaidaPageRoutingModule } from './saida-routing.module';

import { SaidaPage } from './saida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaidaPageRoutingModule
  ],
  declarations: [SaidaPage]
})
export class SaidaPageModule {}
