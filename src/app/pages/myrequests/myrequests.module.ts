import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyrequestsPageRoutingModule } from './myrequests-routing.module';

import { MyrequestsPage } from './myrequests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyrequestsPageRoutingModule
  ],
  declarations: [MyrequestsPage],
  entryComponents:[]
})
export class MyrequestsPageModule {}
