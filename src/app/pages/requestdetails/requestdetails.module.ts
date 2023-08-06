import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestdetailsPageRoutingModule } from './requestdetails-routing.module';

import { RequestdetailsPage } from './requestdetails.page';
import {ShowimageComponent} from "../showimage/showimage.component";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestdetailsPageRoutingModule
  ],
  declarations: [RequestdetailsPage,ShowimageComponent],
  entryComponents:[ShowimageComponent]

})
export class RequestdetailsPageModule {}
