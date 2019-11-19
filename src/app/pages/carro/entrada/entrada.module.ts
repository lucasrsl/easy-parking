import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntradaPageRoutingModule } from './entrada-routing.module';

import { EntradaPage } from './entrada.page';

import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntradaPageRoutingModule,
    BrMaskerModule
  ],
  declarations: [EntradaPage]
})
export class EntradaPageModule {}
