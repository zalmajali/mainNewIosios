import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AlertController, Platform,NavController,MenuController,ToastController} from '@ionic/angular';
import {Storage} from "@ionic/storage";
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { FirebaseMessaging } from '@awesome-cordova-plugins/firebase-messaging/ngx';
import { Globalization } from '@awesome-cordova-plugins/globalization/ngx';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public showFirstPage:any;
  public fullNameLogin:any;
  public emailLogin:any;
  public dir: any;
  public language:any
  public checkLanguage: any=0;
  public userId:any;
  public departmentId:any;
  public type:any;
  public email:any;
  public photo:any;
  public fullName:any;
  public titlePush:any;
  public subHeaderPush:any;
  public imagePush:any;
  constructor(private firebaseMessaging : FirebaseMessaging,private globalization: Globalization, private translate: TranslateService,private toastCtrl: ToastController,private navCtrl: NavController,private iab: InAppBrowser,private menu:MenuController,private alertController:AlertController,private statusBar:StatusBar,private router : Router,private platform : Platform,private storage: Storage) {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#494949');
      this.pushN();
    });
    this.getDeviceLanguage();
    this.goPageValue();
  }
  async pushN(){
    this.firebaseMessaging.requestPermission({forceShow: false}).then(function() {
      console.log("Push messaging is allowed");
    });
    await this.firebaseMessaging.subscribe("JALCO");
    await this.firebaseMessaging.onMessage().subscribe(async (data:any)=>{
      if(this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone')){
        this.titlePush = data.aps.alert.title;
        this.subHeaderPush = data.aps.alert.body;
        if(data.aps.alert.body!=null && data.aps.alert.body!=null && data.aps.alert.body!=undefined && data.aps.alert.body!=0 && data.aps.alert.body!=""){
          const alert = await this.alertController.create({
            header: this.titlePush,
            cssClass: 'alertBacPush',
            mode: 'ios',
            message: this.subHeaderPush,
            buttons: []
          });
          await alert.present();
        }
      }
      if(this.platform.is('android')){
        this.titlePush = data.gcm.title;
        this.subHeaderPush = data.gcm.body;
        if(data.gcm.body!=null && data.gcm.body!=null && data.gcm.body!=undefined && data.gcm.body!=0 && data.gcm.body!=""){
          const alert = await this.alertController.create({
            header: this.titlePush,
            cssClass: 'alertBacPush',
            mode: 'ios',
            message: this.subHeaderPush,
            buttons: []
          });
          await alert.present();
        }
      }
    })
    await this.firebaseMessaging.onBackgroundMessage().subscribe((data:any)=>{
     // console.log(data);
      console.log("asdasdasd");
    })
  }
  async goPageValue(){
    this.fullName = await this.storage.get('fullName');
    this.userId = await this.storage.get('userId');
    this.departmentId = await this.storage.get('departmentId');
    this.type = await this.storage.get('type');
    this.email = await this.storage.get('email');
    if(this.userId == null || this.type == null || this.email == null){
      this.storage.remove('userId');
      this.storage.remove('departmentId');
      this.storage.remove('departmentNameAr');
      this.storage.remove('departmentNameEn');
      this.storage.remove('fullName');
      this.storage.remove('mobile');
      this.storage.remove('jobTitle');
      this.storage.remove('email');
      this.storage.remove('photo');
      this.storage.remove('type');
      this.storage.remove('typeId');
      this.navCtrl.navigateRoot('login');
    }else
      this.navCtrl.navigateRoot('home');
  }
  initialiseTranslation(){
    this.translate.get('dir').subscribe((res: string) => {
      this.dir = res;
    });
  }
  async getDeviceLanguage() {
    await this.storage.get('checkLanguage').then(async checkLanguage=>{
      this.checkLanguage = checkLanguage
    });
    if(this.checkLanguage){
      this.translate.setDefaultLang(this.checkLanguage);
      this.language = this.checkLanguage;
      this.translate.use(this.language);
      this.initialiseTranslation();
    }else{
      if (window.Intl && typeof window.Intl === 'object') {
        let Val  = navigator.language.split("-");
        this.translate.setDefaultLang(Val[0]);
        if (Val[0])
          this.language = Val[0];
        else
          this.language = 'en';
        this.translate.use(this.language);
        this.initialiseTranslation();
      }
      else{
        this.globalization.getPreferredLanguage().then(res => {
          let Val  = res.value.split("-");
          this.translate.setDefaultLang(Val[0]);
          if (Val[0])
            this.language = Val[0];
          else
            this.language = 'en';
          this.translate.use(this.language);
          this.initialiseTranslation();
        }).catch(e => {console.log(e);});
      }
    }
  }
}
