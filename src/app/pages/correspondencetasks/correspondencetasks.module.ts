import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrespondencetasksPageRoutingModule } from './correspondencetasks-routing.module';

import { CorrespondencetasksPage } from './correspondencetasks.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorrespondencetasksPageRoutingModule
  ],
  declarations: [CorrespondencetasksPage],
  entryComponents:[]
})
export class CorrespondencetasksPageModule {}
