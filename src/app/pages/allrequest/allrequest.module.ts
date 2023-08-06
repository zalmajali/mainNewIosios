import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AllrequestPageRoutingModule } from './allrequest-routing.module';
import { AllrequestPage } from './allrequest.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllrequestPageRoutingModule
  ],
  declarations: [AllrequestPage],
  entryComponents:[]

})
export class AllrequestPageModule {}
