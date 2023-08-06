import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcessingrequestsPageRoutingModule } from './processingrequests-routing.module';

import { ProcessingrequestsPage } from './processingrequests.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcessingrequestsPageRoutingModule
  ],
  declarations: [ProcessingrequestsPage],
  entryComponents:[]
})
export class ProcessingrequestsPageModule {}
