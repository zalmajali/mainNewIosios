import { Component, OnInit,Input } from '@angular/core';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import {LoadingController, MenuController, NavController, Platform,ModalController, ToastController,AlertController} from "@ionic/angular";
@Component({
  selector: 'app-showimage',
  templateUrl: './showimage.component.html',
  styleUrls: ['./showimage.component.scss'],
})
export class ShowimageComponent  implements OnInit {
  @Input() link: string | any;
  constructor(private loading: LoadingController,private network:Network,private modalController: ModalController,private platform: Platform) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.modalController.dismiss();
    });
  }
  ngOnInit() {}
  closeModel(){
    this.modalController.dismiss({
    });
  }
}
