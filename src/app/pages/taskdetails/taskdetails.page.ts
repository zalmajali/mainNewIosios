import { Component, OnInit } from '@angular/core';
import {LoadingController, MenuController, NavController, Platform,ModalController, ToastController,AlertController} from "@ionic/angular";
import {Storage} from "@ionic/storage";
import {RequestsService} from "../../services/requests.service";
import { Network } from '@awesome-cordova-plugins/network/ngx';
import {HttpClient} from "@angular/common/http";
import { Globalization } from '@awesome-cordova-plugins/globalization/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Router,ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import {UsersService} from "../../services/users.service";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';
@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.page.html',
  styleUrls: ['./taskdetails.page.scss'],
})
export class TaskdetailsPage implements OnInit {
  public menu3:any;
  public menu5:any;
  public menu6:any;
  public menu7:any;
  public menu8:any;

  public requestsTitle:any;
  public float: any;
  public dir: any;
  public dirTow: any;
  public operationResult:any;
  public returnData:any;
  public returnFullName:any;
  public returnNumber:any;
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


  public requestNumber:any;
  public machineNumber:any;
  public machineDescription:any;
  public machineStatus:any;
  public working:any;
  public notWorking:any;
  public faultDescription:any;
  public urgency:any;
  public issuerName:any;
  public insertTime:any;
  public departmentName:any;
  public closedTime:any;
  public startWorkTime:any;
  public approvedTime:any;
  public replysTitle:any;
  public replysTime:any;
  public fromName:any;
  public replysContent:any;
  public toName:any;
  public firstFile:any;
  public secondFile:any;
  public thirdFile:any;
  public add:any;
  public details:any;

  public arrowBack:any;
  public typeId:any=10;
  public getDataByUser:any = 0;
  public returnRequestData:any;
  public returnArrayRequestFromServer:any;
  public returnRequestArray:any = [];
  public request:any;
  public low:any;
  public medium:any;
  public hight:any;
  public finishedTime:any;
  public routing:any;
  public finished:any;
  public start:any;
  public workingDetails:any;
  public sortingValues:any=1;

  public departmentSearchId:any=0
  public suberViserSearchName:any=0
  public machineSearchNumber:any=0
  public statusSearch:any=0
  public urgencySearch:any=0
  public machineSearchDescription:any=0
  public faultSearchDescription:any=0
  public signOut:any;
  public signMsg:any;
  public settingsYas:any;
  public settingsNo:any;
  public messageSuccess:any;
  public messageFailedOne:any;
  public messageFailedTow:any;
  public taskId:any;
  public typeValId:any;


  public idVal:any;
  public machineWorkingStatus:any;
  public cancelledReason:any;
  public taskDetails:any;

  public supervisor:any;
  public administration:any;
  public maintenanceDepartment:any;
  public employee:any;
  public department:any;
  public name:any;
  public returnEmployeesData:any;
  public returnArrayEmployeesFromServer:any;
  public returnEmployeesArray:any = [];
  public issuerId:any;
  public selectUser:any;

  public isdisabled:boolean=true;
  public addMessageSuccess:any;
  public addMessageFailedOne:any;
  public addMessageFaileTow:any;
  public maintenanceDepart:any;

  public addedBy:any;
  public firstFileVal:any = 0;
  public secondFileVal:any = 0;
  public thirdFileVal:any = 0;
  public findings:any;
  public corrections:any;
  public replacedParts:any;
  public notes:any;
  public startDate:any;
  public endDate:any;
  public totalWorkingHours:any;
  public technicianName:any;
  public approvedBy:any;
  public referenceNumber:any;
  public previousEmployee:any;
  public status:any;
  public departmentNameVal:any;
  public urgencyVal:any;
  public machineNumberVal:any;
  public machineDescriptionVal:any;
  public machineStatusVal:any;
  public faultDescriptionVal:any;
  public findingsVal:any;
  public correctionsVal:any;
  public replacedPartsVal:any;
  public notesVal:any;
  public filseVal:any=[];
  public lastStatusVal:any;
  public lastStatusTimeVal:any;
  public employeetypeVal:any//addby type mani or suber;
  public exisetUserVal:any;//exiset addby type mani or suber;
  public assignedVal:any=[];
  public fullNameAddByVal:any;//addby name;
  public approveTimeVal:any;
  public fullNameAddApproVal:any;
  public employeetypeApproVal:any;//appero type mani or suber;
  public exisetUserApproVal:any;//exiset appero type mani or suber;
  public fullNameAddStatusVal:any;
  public employeetypeStatusVal:any;
  public exisetUserStatusVal:any;
  public manager:any;
  public closedTimeVal:any;
  public referenceNumberVal:any;
  public cancelledReasonVal:any;
  public reopenedBy:any;
  public canceledBy:any;
  public resolvedBy:any;
  public inProgressBy:any;
  public backePage:any;
  public insertTimeVal:any;
  public assignedBy:any;

  public fullNameToTaskVal:any;
  public exisetUserTaskVal:any;
  public fullNameToTaskbyVal:any;
  public exisetUserTaskbyVal:any;
  public lastStatusTask:any;
  public requestId:any;
  public lastStatusTaskTimeVal:any;
  public assignedTaskTimeVal:any;
  public new:any;
  public inProgress:any;
  public resolved:any;
  public onHold:any;
  public fullNameAddTaskStatusVal:any;
  public employeetypeTaskStatusVal:any;
  public exisetUserTaskStatusVal:any;
  public orderDetails:any;
  public requestIdVal:any;
  public newNotifications:any='';
  public returnNotfiData:any;
  public newTasks:any;
  public by:any;
  constructor(private transfer: FileTransfer,private usersService:UsersService,private iab: InAppBrowser,private alertController:AlertController,private activaterouter : ActivatedRoute,private router : Router,private globalization: Globalization,private modalController: ModalController, private translate: TranslateService,private http:HttpClient,private network:Network,private menu:MenuController,private storage: Storage,private platform: Platform,private navCtrl: NavController,private requestsService:RequestsService,private toastCtrl: ToastController,private loading: LoadingController) {
    this.checkInternetData();
    this.menu.enable(false,"last");
    this.menu.enable(false,"first");
    this.backPageValues();
  }
  initialiseTranslation(){
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
    this.translate.get('request_number').subscribe((res: string) => {
      this.requestNumber = res;
    });
    this.translate.get('machine_number').subscribe((res: string) => {
      this.machineNumber = res;
    });
    this.translate.get('machine_description').subscribe((res: string) => {
      this.machineDescription = res;
    });
    this.translate.get('machine_status').subscribe((res: string) => {
      this.machineStatus = res;
    });
    this.translate.get('working').subscribe((res: string) => {
      this.working = res;
    });
    this.translate.get('not_working').subscribe((res: string) => {
      this.notWorking = res;
    });
    this.translate.get('fault_description').subscribe((res: string) => {
      this.faultDescription = res;
    });
    this.translate.get('urgency').subscribe((res: string) => {
      this.urgency = res;
    });
    this.translate.get('issuer_name').subscribe((res: string) => {
      this.issuerName = res;
    });
    this.translate.get('insert_time').subscribe((res: string) => {
      this.insertTime = res;
    });
    this.translate.get('department_name').subscribe((res: string) => {
      this.departmentName = res;
    });
    this.translate.get('closed_time').subscribe((res: string) => {
      this.closedTime = res;
    });
    this.translate.get('finished_time').subscribe((res: string) => {
      this.finishedTime = res;
    });
    this.translate.get('start_work_time').subscribe((res: string) => {
      this.startWorkTime = res;
    });
    this.translate.get('approved_time').subscribe((res: string) => {
      this.approvedTime = res;
    });
    this.translate.get('arrow_back').subscribe((res: string) => {
      this.arrowBack = res;
    });
    this.translate.get('low').subscribe((res: string) => {
      this.low = res;
    });
    this.translate.get('medium').subscribe((res: string) => {
      this.medium = res;
    });
    this.translate.get('hight').subscribe((res: string) => {
      this.hight = res;
    });
    this.translate.get('routing').subscribe((res: string) => {
      this.routing = res;
    });
    this.translate.get('working_details').subscribe((res: string) => {
      this.workingDetails = res;
    });
    this.translate.get('finished').subscribe((res: string) => {
      this.finished = res;
    });
    this.translate.get('start').subscribe((res: string) => {
      this.start = res;
    });
    this.translate.get('settings_yas').subscribe((res: string) => {
      this.settingsYas = res;
    });
    this.translate.get('settings_No').subscribe((res: string) => {
      this.settingsNo = res;
    });
    this.translate.get('signOut').subscribe((res: string) => {
      this.signOut = res;
    });
    this.translate.get('signMsg').subscribe((res: string) => {
      this.signMsg = res;
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
    this.translate.get('cancelled_reason').subscribe((res: string) => {
      this.cancelledReason = res;
    });
    this.translate.get('supervisor').subscribe((res: string) => {
      this.supervisor = res;
    });
    this.translate.get('administration').subscribe((res: string) => {
      this.administration = res;
    });
    this.translate.get('maintenance_department').subscribe((res: string) => {
      this.maintenanceDepartment = res;
    });
    this.translate.get('employee').subscribe((res: string) => {
      this.employee = res;
    });
    this.translate.get('department').subscribe((res: string) => {
      this.department = res;
    });
    this.translate.get('name').subscribe((res: string) => {
      this.name = res;
    });
    this.translate.get('addre_message_success').subscribe((res: string) => {
      this.addMessageSuccess = res;
    });
    this.translate.get('addre_message_failed_one').subscribe((res: string) => {
      this.addMessageFailedOne = res;
    });
    this.translate.get('addre_message_failed_tow').subscribe((res: string) => {
      this.addMessageFaileTow = res;
    });
    this.translate.get('maintenance_depart').subscribe((res: string) => {
      this.maintenanceDepart = res;
    });
    this.translate.get('added_by').subscribe((res: string) => {
      this.addedBy = res;
    });
    this.translate.get('by').subscribe((res: string) => {
      this.by = res;
    });
    this.translate.get('findings').subscribe((res: string) => {
      this.findings = res;
    });
    this.translate.get('corrections').subscribe((res: string) => {
      this.corrections = res;
    });
    this.translate.get('replaced_parts').subscribe((res: string) => {
      this.replacedParts = res;
    });
    this.translate.get('notes').subscribe((res: string) => {
      this.notes = res;
    });
    this.translate.get('start_date').subscribe((res: string) => {
      this.startDate = res;
    });
    this.translate.get('end_date').subscribe((res: string) => {
      this.endDate = res;
    });
    this.translate.get('total_working_hours').subscribe((res: string) => {
      this.totalWorkingHours = res;
    });
    this.translate.get('total_working_hours').subscribe((res: string) => {
      this.technicianName = res;
    });
    this.translate.get('approved_by').subscribe((res: string) => {
      this.approvedBy = res;
    });
    this.translate.get('reference_number').subscribe((res: string) => {
      this.referenceNumber = res;
    });
    this.translate.get('previous_employee').subscribe((res: string) => {
      this.previousEmployee = res;
    });
    this.translate.get('manager').subscribe((res: string) => {
      this.manager = res;
    });
    this.translate.get('in_progress_by').subscribe((res: string) => {
      this.inProgressBy = res;
    });
    this.translate.get('resolved_by').subscribe((res: string) => {
      this.resolvedBy = res;
    });
    this.translate.get('canceled_by').subscribe((res: string) => {
      this.canceledBy = res;
    });
    this.translate.get('reopened_by').subscribe((res: string) => {
      this.reopenedBy = res;
    });
    this.translate.get('task_details').subscribe((res: string) => {
      this.taskDetails = res;
    });
    this.translate.get('assigned_by').subscribe((res: string) => {
      this.assignedBy = res;
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
    this.translate.get('on_hold').subscribe((res: string) => {
      this.onHold = res;
    });
    this.translate.get('current_status').subscribe((res: string) => {
      this.status = res;
    });
    this.translate.get('order_details').subscribe((res: string) => {
      this.orderDetails = res;
    });
    this.translate.get('request_number').subscribe((res: string) => {
      this.requestId = res;
    });
    this.translate.get('new_tasks').subscribe((res: string) => {
      this.newTasks = res;
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
  async functionGetData(taskId:any,userId:any){
    const loading = await this.loading.create({
      cssClass: 'my-custom-class',
      message: '',
      duration: 2000,
    });
    await loading.present();
    this.requestsService.taskDetails(taskId,userId).then(async data=>{
      this.returnRequestData = data;
      this.operationResult = this.returnRequestData.Error.ErrorCode;
      if(this.operationResult==1){
        await this.storage.get('checkLanguage').then(async checkLanguage=>{
          this.checkLanguage = checkLanguage
        });
        if(this.checkLanguage){
          if(this.language != "en")
            this.departmentNameVal = this.returnRequestData.Data.departmentNameEn;
          else
            this.departmentNameVal = this.returnRequestData.Data.departmentNameEn;
        }else{
          if (window.Intl && typeof window.Intl === 'object') {
            let Val  = navigator.language.split("-");
            if(this.language != "en")
              this.departmentNameVal = this.returnRequestData.Data.departmentNameEn;
            else
              this.departmentNameVal = this.returnRequestData.Data.departmentNameEn;
          }
          else{
            this.globalization.getPreferredLanguage().then(res => {
              let Val  = res.value.split("-");
              if(this.language != "en")
                this.departmentNameVal = this.returnRequestData.Data.departmentNameEn;
              else
                this.departmentNameVal = this.returnRequestData.Data.departmentNameEn;
            }).catch(e => {console.log(e);});
          }
        }

        this.fullNameToTaskVal = this.returnRequestData.Data.fullNameToTask;
        this.exisetUserTaskVal = this.returnRequestData.Data.exisetUserTask;
        this.fullNameToTaskbyVal = this.returnRequestData.Data.fullNameToTaskBy;
        this.exisetUserTaskbyVal = this.returnRequestData.Data.exisetUserTaskby;
        this.lastStatusTask = this.returnRequestData.Data.lastStatusTask;
        this.fullNameAddTaskStatusVal = this.returnRequestData.Data.fullNameAddTaskStatus;
        this.employeetypeTaskStatusVal = this.returnRequestData.Data.employeetypeTaskStatus;
        this.exisetUserTaskStatusVal = this.returnRequestData.Data.exisetUserTaskStatus;
        this.assignedTaskTimeVal = this.returnRequestData.Data.assignedTaskTime;
        this.lastStatusTaskTimeVal = this.returnRequestData.Data.lastStatusTaskTime;
        this.requestIdVal = this.returnRequestData.Data.requestId;
        this.lastStatusVal = this.returnRequestData.Data.lastStatus;
        if(this.returnRequestData.Data.urgency == 1)
          this.urgencyVal = this.low;
        if(this.returnRequestData.Data.urgency == 2)
          this.urgencyVal = this.medium;
        if(this.returnRequestData.Data.urgency == 3)
          this.urgencyVal = this.hight;
        this.machineNumberVal = this.returnRequestData.Data.machineNumber;
        this.machineDescriptionVal = this.returnRequestData.Data.machineDescription;
        this.insertTimeVal = this.returnRequestData.Data.insertTime;
        this.closedTimeVal = this.returnRequestData.Data.closedTime;
        this.lastStatusTimeVal = this.returnRequestData.Data.lastStatusTime;
        this.cancelledReasonVal = this.returnRequestData.Data.cancelledReason;
        if(this.returnRequestData.Data.machineStatus == 1)
          this.machineWorkingStatus = this.working;
        if(this.returnRequestData.Data.machineStatus == 2)
          this.machineWorkingStatus = this.notWorking;
        for(let i = 0; i < this.returnRequestData.Data.filse.length;i++) {
          this.filseVal[i]=[];
          this.filseVal[i]['link'] = this.returnRequestData.Data.filse[i][0];
          this.filseVal[i]['name'] = this.returnRequestData.Data.filse[i][1];
        }
        this.faultDescriptionVal = this.returnRequestData.Data.faultDescription;
        this.fullNameAddByVal = this.returnRequestData.Data.fullNameAddBy;
        this.employeetypeVal = this.returnRequestData.Data.employeetypeAddBy;
        this.exisetUserVal = this.returnRequestData.Data.exisetUserAddBy;
        this.approveTimeVal = this.returnRequestData.Data.approveTime;
        this.fullNameAddApproVal = this.returnRequestData.Data.fullNameAddAppro;
        this.employeetypeApproVal = this.returnRequestData.Data.employeetypeAppro;
        this.exisetUserApproVal = this.returnRequestData.Data.exisetUserAppro;
        this.fullNameAddStatusVal = this.returnRequestData.Data.fullNameAddStatus;
        this.employeetypeStatusVal = this.returnRequestData.Data.employeetypeStatus;
        this.exisetUserStatusVal = this.returnRequestData.Data.exisetUserStatus;
      }
    }).catch(error=>{
      this.functionGetData(taskId,userId)
    });
  }
  async ngOnInit() {
    this.typeValId = await this.storage.get('typeId');
    await this.getDeviceLanguage();
    this.checkInternetData();
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
      this.router.navigateByUrl('login');
    }else{
      this.activaterouter.params.subscribe((params:any) => {
        this.taskId = params['taskId'];
        this.backePage = params['page'];
      });
      if(this.departmentId==1 && this.type=='man')
        this.getDataByUser = 1;
      else if(this.departmentId==1 && this.type=='suber')
        this.getDataByUser = 2;
      else if(this.type=='itMan')
        this.getDataByUser = 5;
      this.functionGetData(this.taskId,this.userId);
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
  functionShowFile(link:any){
    const browser = this.iab.create(link);
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
  async backPageValues(){
    this.platform.backButton.subscribeWithPriority(10, async () => {
      if(this.backePage == 1)
        this.navCtrl.navigateRoot("/alltasks");
      if(this.backePage == 2)
        this.navCtrl.navigateRoot("/newtasks");
      if(this.backePage == 3)
        this.navCtrl.navigateRoot("/onholdtasks");
      if(this.backePage == 4)
        this.navCtrl.navigateRoot("/progresstasks");
      if(this.backePage == 5)
        this.navCtrl.navigateRoot("/finishedtasks");
    });
  }
  functionBack(){
    if(this.backePage == 1)
      this.navCtrl.navigateRoot("/alltasks");
    if(this.backePage == 2)
      this.navCtrl.navigateRoot("/newtasks");
    if(this.backePage == 3)
      this.navCtrl.navigateRoot("/onholdtasks");
    if(this.backePage == 4)
      this.navCtrl.navigateRoot("/progresstasks");
    if(this.backePage == 5)
      this.navCtrl.navigateRoot("/finishedtasks");
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
