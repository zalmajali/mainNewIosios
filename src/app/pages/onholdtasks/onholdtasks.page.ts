import { Component, OnInit,ViewChild } from '@angular/core';
import {LoadingController, MenuController, NavController, Platform,ModalController, ToastController,AlertController} from "@ionic/angular";
import {Storage} from "@ionic/storage";
import {RequestsService} from "../../services/requests.service";
import { Network } from '@awesome-cordova-plugins/network/ngx';
import {HttpClient} from "@angular/common/http";
import { Globalization } from '@awesome-cordova-plugins/globalization/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Router,ActivatedRoute } from '@angular/router';
import {TasksfilterComponent} from "../tasksfilter/tasksfilter.component";
import { IonInfiniteScroll } from '@ionic/angular';
import {TasksoperationsComponent} from "../tasksoperations/tasksoperations.component";
import {UsersService} from "../../services/users.service";
@Component({
  selector: 'app-onholdtasks',
  templateUrl: './onholdtasks.page.html',
  styleUrls: ['./onholdtasks.page.scss'],
})
export class OnholdtasksPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll | any;
  public menu3:any;
  public menu5:any;
  public menu6:any;
  public menu7:any;
  public menu8:any;
  public allTasks:any;
  public float: any;
  public dir: any;
  public dirTow: any;
  public operationResult:any;
  public returnData:any;
  public message:any;
  public checkLanguage: any=0;
  public language: any;
  public internetMessage: any;
  public userId:any;
  public departmentId:any;
  public type:any;
  public email:any;
  public imageInformation:any=1;
  public toastStyle:any;
  public sorry:any;
  public sorryReson:any;
  public arrowBack:any;
  public messageSuccess:any;
  public messageFailedOne:any;
  public messageFailedTow:any;
  public add:any;
  public settingsYas:any;
  public settingsNo:any;
  public returnTasksData:any;
  public returnArrayTasksFromServer:any;
  public returnTasksArray:any = [];
  public tasks:any=2;
  public loopingNumber:any = 1;
  public details:any;
  public start:any;
  public onHold:any;
  public correspondence:any;
  public delete:any;
  public operations:any;
  public finish:any;
  public requestNumber:any;
  public departmentName:any;
  public status:any;
  public assignedBy:any;
  public insertTime:any;
  public manager:any;
  public lastStatusTime:any;
  public by:any;
  public previousEmployee:any;
  public supervisor:any;
  public lastStatusVal:any;
  public new:any;
  public inProgress:any;
  public resolved:any;
  public employee:any;
  public orderId:any;
  public departmentSearchId:any;
  public suberViserSearchName:any;
  public statusVal:any;
  public getDataByUser:any = 0;
  public signMsg:any;
  public newNotifications:any='';
  public returnNotfiData:any;
  public newTasks:any;
  public alertMsgOne:any;
  public alertMsgTow:any;
  public alertMsgThree:any;
  public alertMsgFor:any;
  public alertMsgFive:any;
  public alertMsgSix:any;
  public alertAllMsg:any;
  constructor(private usersService:UsersService,private alertController:AlertController,private activaterouter : ActivatedRoute,private router : Router,private globalization: Globalization,private modalController: ModalController, private translate: TranslateService,private http:HttpClient,private network:Network,private menu:MenuController,private storage: Storage,private platform: Platform,private navCtrl: NavController,private requestsService:RequestsService,private toastCtrl: ToastController,private loading: LoadingController) {
    this.checkInternetData();
    this.menu.enable(false,"last");
    this.menu.enable(false,"first");
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.navCtrl.navigateRoot('/home');
    });
  }
  initialiseTranslation(){
    this.translate.get('on_hold_tasks').subscribe((res: string) => {
      this.allTasks = res;
    });
    this.translate.get('floatD').subscribe((res: string) => {
      this.float = res;
    });
    this.translate.get('internet_message').subscribe((res: string) => {
      this.internetMessage = res;
    });
    this.translate.get('dir').subscribe((res: string) => {
      this.dir = res;
    });
    this.translate.get('dirTow').subscribe((res: string) => {
      this.dirTow = res;
    });
    this.translate.get('sorry').subscribe((res: string) => {
      this.sorry = res;
    });
    this.translate.get('sorry_reson').subscribe((res: string) => {
      this.sorryReson = res;
    });
    this.translate.get('add').subscribe((res: string) => {
      this.add = res;
    });
    this.translate.get('arrow_back').subscribe((res: string) => {
      this.arrowBack = res;
    });
    this.translate.get('settings_yas').subscribe((res: string) => {
      this.settingsYas = res;
    });
    this.translate.get('settings_No').subscribe((res: string) => {
      this.settingsNo = res;
    });
    this.translate.get('message_success').subscribe((res: string) => {
      this.messageSuccess = res;
    });
    this.translate.get('message_failed_one').subscribe((res: string) => {
      this.messageFailedOne = res;
    });
    this.translate.get('message_failed_tow').subscribe((res: string) => {
      this.messageFailedTow = res;
    });
    this.translate.get('details').subscribe((res: string) => {
      this.details = res;
    });
    this.translate.get('start').subscribe((res: string) => {
      this.start = res;
    });
    this.translate.get('on_hold').subscribe((res: string) => {
      this.onHold = res;
    });

    this.translate.get('new').subscribe((res: string) => {
      this.new = res;
    });
    this.translate.get('in_progress').subscribe((res: string) => {
      this.inProgress = res;
    });
    this.translate.get('resolved').subscribe((res: string) => {
      this.resolved = res;
    });
    this.translate.get('correspondence').subscribe((res: string) => {
      this.correspondence = res;
    });
    this.translate.get('delete').subscribe((res: string) => {
      this.delete = res;
    });
    this.translate.get('operations').subscribe((res: string) => {
      this.operations = res;
    });
    this.translate.get('finish').subscribe((res: string) => {
      this.finish = res;
    });
    this.translate.get('request_number').subscribe((res: string) => {
      this.requestNumber = res;
    });
    this.translate.get('department_name').subscribe((res: string) => {
      this.departmentName = res;
    });
    this.translate.get('status').subscribe((res: string) => {
      this.status = res;
    });
    this.translate.get('assigned_by').subscribe((res: string) => {
      this.assignedBy = res;
    });
    this.translate.get('manager').subscribe((res: string) => {
      this.manager = res;
    });
    this.translate.get('last_status_time').subscribe((res: string) => {
      this.lastStatusTime = res;
    });
    this.translate.get('by').subscribe((res: string) => {
      this.by = res;
    });
    this.translate.get('previous_employee').subscribe((res: string) => {
      this.previousEmployee = res;
    });
    this.translate.get('supervisor').subscribe((res: string) => {
      this.supervisor = res;
    });
    this.translate.get('employee').subscribe((res: string) => {
      this.employee = res;
    });
    this.translate.get('insert_time').subscribe((res: string) => {
      this.insertTime = res;
    });
    this.translate.get('signMsg').subscribe((res: string) => {
      this.signMsg = res;
    });
    this.translate.get('new_tasks').subscribe((res: string) => {
      this.newTasks = res;
    });
    this.translate.get('alert_msg_one').subscribe((res: string) => {
      this.alertMsgOne = res;
    });
    this.translate.get('alert_msg_tow').subscribe((res: string) => {
      this.alertMsgTow = res;
    });
    this.translate.get('alert_msg_three').subscribe((res: string) => {
      this.alertMsgThree = res;
    });
    this.translate.get('alert_msg_for').subscribe((res: string) => {
      this.alertMsgFor = res;
    });
    this.translate.get('alert_msg_five').subscribe((res: string) => {
      this.alertMsgFive = res;
    });
    this.translate.get('alert_msg_six').subscribe((res: string) => {
      this.alertMsgSix = res;
    });
    //menue
    //last menue
    this.translate.get('menu3').subscribe((res: string) => {
      this.menu3 = res;
    });
    this.translate.get('menu5').subscribe((res: string) => {
      this.menu5 = res;
    });
    this.translate.get('menu6').subscribe((res: string) => {
      this.menu6 = res;
    });
    this.translate.get('menu7').subscribe((res: string) => {
      this.menu7 = res;
    });
    this.translate.get('menu8').subscribe((res: string) => {
      this.menu8 = res;
    });
    //menue
  }
  async functionGetData(userId:any,getDataByUser:any,orderId:any=0,departmentId:any=0,assigned:any=0) {
    let limitNew = this.loopingNumber;
    const loading = await this.loading.create({
      cssClass: 'my-custom-class',
      message: '',
      duration: 2500,
    });
    await loading.present();
    this.requestsService.onHoldTasks(userId,getDataByUser,orderId,departmentId,assigned,limitNew).then(async data=>{
      this.returnTasksData = data;
      console.log(this.returnTasksData);
      this.operationResult = this.returnTasksData.Error.ErrorCode;
      if(this.operationResult==1){
        this.returnArrayTasksFromServer = this.returnTasksData.Data.assigned;
        this.returnTasksArray=[];
        for(let i = 0; i < this.returnArrayTasksFromServer.length;i++) {
          this.returnTasksArray[i]=[];
          this.returnTasksArray[i]['id']=this.returnArrayTasksFromServer[i].id;
          this.returnTasksArray[i]['requestId']=this.returnArrayTasksFromServer[i].requestId;
          this.returnTasksArray[i]['employeeName']=this.returnArrayTasksFromServer[i].employeeName;
          this.returnTasksArray[i]['insertTime']=this.returnArrayTasksFromServer[i].insertTime;
          this.returnTasksArray[i]['exisetUser']=this.returnArrayTasksFromServer[i].exisetUser;
          this.returnTasksArray[i]['exisetDepartUser']=this.returnArrayTasksFromServer[i].exisetDepartUser;
          this.returnTasksArray[i]['exisetDepartType']=this.returnArrayTasksFromServer[i].exisetDepartType;
          this.returnTasksArray[i]['employeeDepartName']=this.returnArrayTasksFromServer[i].employeeDepartName;
          this.returnTasksArray[i]['lastStatus']=this.returnArrayTasksFromServer[i].lastStatus;
          this.returnTasksArray[i]['lastStatusVal'] = this.inProgress;
          this.returnTasksArray[i]['lastStatusTime']=this.returnArrayTasksFromServer[i].lastStatusTime;
          this.returnTasksArray[i]['exisetDepartUserAssigned']=this.returnArrayTasksFromServer[i].exisetDepartUserAssigned;
          this.returnTasksArray[i]['employeeDepartNameAssigned']=this.returnArrayTasksFromServer[i].employeeDepartNameAssigned;
          this.returnTasksArray[i]['show']=1;
          await this.storage.get('checkLanguage').then(async checkLanguage=>{
            this.checkLanguage = checkLanguage
          });
          if(this.checkLanguage){
            if(this.language != "en")
              this.returnTasksArray[i]['departmentName'] = this.returnArrayTasksFromServer[i].departmentNameEn;
            else
              this.returnTasksArray[i]['departmentName'] = this.returnArrayTasksFromServer[i].departmentNameEn;
          }else{
            if (window.Intl && typeof window.Intl === 'object') {
              let Val  = navigator.language.split("-");
              if(this.language != "en")
                this.returnTasksArray[i]['departmentName'] = this.returnArrayTasksFromServer[i].departmentNameEn;
              else
                this.returnTasksArray[i]['departmentName'] = this.returnArrayTasksFromServer[i].departmentNameEn;
            }
            else{
              this.globalization.getPreferredLanguage().then(res => {
                let Val  = res.value.split("-");
                if(this.language != "en")
                  this.returnTasksArray[i]['departmentName'] = this.returnArrayTasksFromServer[i].departmentNameEn;
                else
                  this.returnTasksArray[i]['departmentName'] = this.returnArrayTasksFromServer[i].departmentNameEn;
              }).catch(e => {console.log(e);});
            }
          }
        }
        let countOfData = this.returnTasksArray.length;
        if(countOfData == 0)
          this.tasks = 0;
        else{
          this.tasks = 1;
        }
      }else
        this.tasks = 0;
    }).catch(error=>{
      this.functionGetData(userId,getDataByUser,orderId,departmentId,assigned)
    });
  }
  async ngOnInit() {
    await this.getDeviceLanguage();
    this.checkInternetData();
    this.storage.remove('orderIdTask');
    this.storage.remove('departmentSearchIdTask');
    this.storage.remove('suberViserSearchNameTask');
    this.storage.remove('statusValTask');
    this.userId = await this.storage.get('userId');
    this.departmentId = await this.storage.get('departmentId');
    this.type = await this.storage.get('type');
    this.email = await this.storage.get('email');
    if(this.departmentId!=1 && this.type=='suber')
      this.imageInformation = 2;
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
      this.navCtrl.navigateRoot('/login');
    }else{
      if(this.departmentId==1 && this.type=='suber')
        this.getDataByUser = 1;
      else if(this.departmentId==1 && this.type=='man')
        this.getDataByUser = 2;
      else if(this.type=='itMan')
        this.getDataByUser = 5;
      this.functionGetData(this.userId,this.getDataByUser)
    }
    this.notifications();
  }
  async notifications(){
    this.usersService.newNotifications(this.userId).then(async data=>{
      this.returnNotfiData = data;
      this.operationResult = this.returnNotfiData.Error.ErrorCode;
      if(this.operationResult==1){
        this.newNotifications = this.returnNotfiData.Data.numSelectNotifications;
      }else{
        this.newNotifications = 0;
      }
    }).catch(e=>{
      this.newNotifications = 0;
    })
    setTimeout(()=>{
      this.notifications();
    },3500)
  }
  async filterVal(){
    let model = await this.modalController.create({
      component:TasksfilterComponent,
      animated:true,
      componentProps:{page:0},
      cssClass:"modalFilterSortCss"
    });
    model.onDidDismiss().then(data=>{
      this.orderId = data.data.orderId;
      this.departmentSearchId = data.data.departmentSearchId;
      this.suberViserSearchName = data.data.suberViserSearchName;
      this.statusVal = data.data.statusVal;
      if(this.orderId == null || this.orderId == 0  || this.orderId == "")
        this.orderId = 0;
      if(this.departmentSearchId == 0 || this.departmentSearchId == null || this.departmentSearchId == "")
        this.departmentSearchId = 0;
      if(this.suberViserSearchName == 0 || this.suberViserSearchName == null || this.suberViserSearchName == "")
        this.suberViserSearchName = 0;
      if(this.statusVal == 0 || this.statusVal == null || this.statusVal == "")
        this.statusVal = 0;
      this.functionGetData(this.userId,this.getDataByUser,this.orderId,this.departmentSearchId,this.suberViserSearchName)
    });
    await model.present();
  }
  loadMoreData(event:any) {
    this.loopingNumber++;
    setTimeout(() => {
      this.functionGetData(this.userId,this.getDataByUser,this.orderId,this.departmentSearchId,this.suberViserSearchName)
      event.target.complete();
      if (this.loopingNumber >= 200) {
        event.target.disabled = true;
      }
    }, 2000);
  }
  refrechAllPage(event:any) {
    this.loopingNumber = 1;
    this.functionGetData(this.userId,this.getDataByUser,this.orderId,this.departmentSearchId,this.suberViserSearchName)
    setTimeout(() => {
      event.target.complete();
    }, 2000);
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  async functionTaskDetails(taskId:any,index:any){
    this.navCtrl.navigateRoot(["/taskdetails", {taskId:taskId,page:3}]);
  }
  async functionTaskCorrespondence(taskId:any,index:any,requestId:any){
    this.navCtrl.navigateRoot(["/correspondencetasks", {requestId:requestId,taskId:taskId,page:3}]);
  }
  async functionTaskStart(taskId:any,requestId:any,index:any){
    this.alertAllMsg = this.alertMsgOne+" #"+requestId+" "+this.signMsg;
    const alert = await this.alertController.create({
      cssClass: 'alertBac',
      mode: 'ios',
      message: this.alertAllMsg,
      buttons: [
        {
          text: this.settingsNo,
          cssClass: 'alertButton',
          handler: () => {
          }
        },{
          text: this.settingsYas,
          cssClass: 'alertButton',
          handler: () => {
            this.requestsService.taskProceed(taskId,this.userId).then(async data=>{
              this.returnTasksData = data;
              this.operationResult = this.returnTasksData.Error.ErrorCode;
              if(this.operationResult==1){
                this.displayResult(this.messageSuccess);
                this.returnTasksArray[index]['lastStatus'] = 1;
              }
              else if(this.operationResult==2)
                this.displayResult(this.messageFailedOne);
              else
                this.displayResult(this.messageFailedTow);
            });
          }
        }
      ]
    });
    await alert.present();
  }
  async functionTaskDelete(taskId:any,requestId:any,index:any){
    this.alertAllMsg = this.alertMsgFor+" #"+requestId+" "+this.signMsg;
    const alert = await this.alertController.create({
      cssClass: 'alertBac',
      mode: 'ios',
      message: this.alertAllMsg,
      buttons: [
        {
          text: this.settingsNo,
          cssClass: 'alertButton',
          handler: () => {
          }
        },{
          text: this.settingsYas,
          cssClass: 'alertButton',
          handler: () => {
            this.requestsService.taskDelete(taskId,this.userId).then(async data=>{
              this.returnTasksData = data;
              this.operationResult = this.returnTasksData.Error.ErrorCode;
              if(this.operationResult==1){
                this.displayResult(this.messageSuccess);
                this.returnTasksArray[index]['show'] = 0;
              }
              else if(this.operationResult==2)
                this.displayResult(this.messageFailedOne);
              else
                this.displayResult(this.messageFailedTow);
            });
          }
        }
      ]
    });
    await alert.present();
  }
  async functionTaskOperations(taskId:any,index:any){
    let model = await this.modalController.create({
      component:TasksoperationsComponent,
      animated:true,
      componentProps:{taskId:taskId,orderId:this.returnTasksArray[index]['requestId']},
      cssClass:"modalFilterSortCss"
    });
    model.onDidDismiss().then(data=>{
    });
    await model.present();
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
  checkInternetData(){
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      this.message = this.internetMessage;
      this.displayResult(this.message);
    })
  }
  async displayResult(message:any){
    this.translate.get('toastStyle').subscribe((res: string) => {
      this.toastStyle = res;
    });
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      cssClass:this.toastStyle,
      color:""
    });
    await toast.present();
  }
  functionHome(){
    this.navCtrl.navigateRoot("/home");
  }
  functionRequest(){
    if(this.departmentId==1 && this.type=='suber')
      this.navCtrl.navigateRoot("/newtasks")
    else
      this.navCtrl.navigateRoot("/myrequests")
  }
  functionAddrequest(){
    this.navCtrl.navigateRoot("/addrequest");
  }
  functionTeam(){
    this.navCtrl.navigateRoot("/team");
  }
  functionNewtasks(){
    this.navCtrl.navigateRoot("/newtasks");
  }
  functionAccount(){
    this.navCtrl.navigateRoot("/account");
  }
  functionPushNotifications(){
    this.navCtrl.navigateRoot("/pushnotification");
  }
  functionProgressTasks(){
    this.navCtrl.navigateRoot("/progresstasks");
  }
  settings(){
    this.navCtrl.navigateRoot("/settings");
  }
}
