import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewtasksPageRoutingModule } from './newtasks-routing.module';

import { NewtasksPage } from './newtasks.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewtasksPageRoutingModule
  ],
  declarations: [NewtasksPage],
  entryComponents:[]
})
export class NewtasksPageModule {}
