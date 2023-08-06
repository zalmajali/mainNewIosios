import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanceledrequestsPageRoutingModule } from './canceledrequests-routing.module';

import { CanceledrequestsPage } from './canceledrequests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanceledrequestsPageRoutingModule
  ],
  declarations: [CanceledrequestsPage],
  entryComponents:[]
})
export class CanceledrequestsPageModule {}
