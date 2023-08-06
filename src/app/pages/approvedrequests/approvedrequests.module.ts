import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApprovedrequestsPageRoutingModule } from './approvedrequests-routing.module';

import { ApprovedrequestsPage } from './approvedrequests.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApprovedrequestsPageRoutingModule
  ],
  declarations: [ApprovedrequestsPage],
  entryComponents:[]
})
export class ApprovedrequestsPageModule {}
