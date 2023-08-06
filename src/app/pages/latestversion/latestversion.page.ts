import { Component, OnInit } from '@angular/core';
import { InAppBrowser,InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';
import {AlertController,MenuController, Platform, NavController, IonSlides, ModalController, ToastController,IonInput} from '@ionic/angular';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import {UsersService} from "../../services/users.service";
import {Storage} from "@ionic/storage";
@Component({
  selector: 'app-latestversion',
  templateUrl: './latestversion.page.html',
  styleUrls: ['./latestversion.page.scss'],
})
export class LatestversionPage implements OnInit {
  public update:any;
  public checkLanguage: any=0;
  public language: any;
  public image: any;
  public returnVersionData:any;
  public androidVersion:any;
  public iosVersion:any;
  public operationResult:any;
  public numberLogin:any;
  public type:any;
  public email:any;
  public userId:any;
  constructor(private storage: Storage,private navCtrl: NavController,private appVersion: AppVersion,private usersService:UsersService,private platform: Platform,private inAppBrowser: InAppBrowser) { }
  async checkLatestVersion() {
    this.usersService.getVersion().then(async data=>{
      this.returnVersionData = data;
      this.operationResult = this.returnVersionData.Error.ErrorCode;
      if(this.operationResult==1){
        this.androidVersion = this.returnVersionData.Data.android;
        this.iosVersion = this.returnVersionData.Data.ios;
        this.appVersion.getVersionNumber().then(async dataVer=>{
          if(this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone')){
            if(dataVer === this.iosVersion){
              this.userId = await this.storage.get('userId');
              this.type = await this.storage.get('type');
              this.email = await this.storage.get('email');
              if(this.userId == null || this.type == null || this.email == null)
                this.navCtrl.navigateRoot('login');
              else
                this.navCtrl.navigateRoot('home');
            }
          }else if(this.platform.is('android')){
            if(dataVer === this.androidVersion){
              this.userId = await this.storage.get('userId');
              this.type = await this.storage.get('type');
              this.email = await this.storage.get('email');
              if(this.userId == null || this.type == null || this.email == null)
                this.navCtrl.navigateRoot('login');
              else
                this.navCtrl.navigateRoot('home');
            }
          }
        })
      }
    });
    setTimeout(() => {
      this.checkLatestVersion();
    }, 1000);
  }
  async ngOnInit() {
  }
  functionGoStore() {
    let appStoreUrl = '';
    if (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'))
      appStoreUrl = 'itms://itunes.apple.com/app/6451083439'; // Replace {YOUR_APP_ID} with your app's ID
    else if (this.platform.is('android'))
      appStoreUrl = 'market://details?id=maintenance.pwprog.com'; // Replace with your app's package name
    this.inAppBrowser.create(appStoreUrl, '_system');
  }
}
