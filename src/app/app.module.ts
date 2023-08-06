import { NgModule,NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FileTransfer } from '@awesome-cordova-plugins/file-transfer/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { ImagePicker } from '@awesome-cordova-plugins/image-picker/ngx';
import {HttpClientModule, HttpClient} from "@angular/common/http";
import { IonicStorageModule } from '@ionic/storage';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { Clipboard } from '@awesome-cordova-plugins/clipboard/ngx';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { FirebaseMessaging } from '@awesome-cordova-plugins/firebase-messaging/ngx';
import { Globalization } from '@awesome-cordova-plugins/globalization/ngx';
import {AboutComponent} from "./pages/about/about.component";
import {RequestsfilteruserComponent} from "./pages/requestsfilteruser/requestsfilteruser.component";
import {RequestsfilterComponent} from "./pages/requestsfilter/requestsfilter.component";
import {CancelledreasonComponent} from "./pages/cancelledreason/cancelledreason.component";
import {OperationsComponent} from "./pages/operations/operations.component";
import {CorrespondenceaddComponent} from "./pages/correspondenceadd/correspondenceadd.component";
import {CorrespondenceaddtaskComponent} from "./pages/correspondenceaddtask/correspondenceaddtask.component";
import {TasksoperationsComponent} from "./pages/tasksoperations/tasksoperations.component";
import {TasksfilterComponent} from "./pages/tasksfilter/tasksfilter.component";
import {SeemessageComponent} from "./pages/seemessage/seemessage.component";
import { FormsModule } from '@angular/forms';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  declarations: [AppComponent,AboutComponent,RequestsfilteruserComponent,RequestsfilterComponent,CancelledreasonComponent,OperationsComponent,CorrespondenceaddComponent,CorrespondenceaddtaskComponent,TasksoperationsComponent,TasksfilterComponent,SeemessageComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,IonicStorageModule.forRoot(),FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },FirebaseMessaging,AppVersion,Globalization,FileTransfer,File,ImagePicker,Network,CallNumber,StatusBar,SocialSharing,Clipboard,InAppBrowser],
  bootstrap: [AppComponent],
  exports:[AboutComponent,RequestsfilteruserComponent,RequestsfilterComponent,CancelledreasonComponent,OperationsComponent,CorrespondenceaddComponent,CorrespondenceaddtaskComponent,TasksoperationsComponent,TasksfilterComponent,SeemessageComponent],
})
export class AppModule {}
