import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewrequestPageRoutingModule } from './newrequest-routing.module';

import { NewrequestPage } from './newrequest.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewrequestPageRoutingModule
  ],
  declarations: [NewrequestPage],
  entryComponents:[]
})
export class NewrequestPageModule {}
