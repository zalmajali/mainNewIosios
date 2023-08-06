import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllrequestusersPageRoutingModule } from './allrequestusers-routing.module';

import { AllrequestusersPage } from './allrequestusers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllrequestusersPageRoutingModule
  ],
  declarations: [AllrequestusersPage],
  entryComponents:[]
})
export class AllrequestusersPageModule {}
