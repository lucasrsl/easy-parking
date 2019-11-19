import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscalaPageRoutingModule } from './escala-routing.module';

import { EscalaPage } from './escala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscalaPageRoutingModule
  ],
  declarations: [EscalaPage]
})
export class EscalaPageModule {}
