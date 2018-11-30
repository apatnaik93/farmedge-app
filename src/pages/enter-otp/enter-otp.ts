import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {RegisteredDevicesPage} from "../registered-devices/registered-devices";
import {UserService} from "../../services/user.service";
import {HttpService} from "../../services/http-service";
import {SMS} from "@ionic-native/sms";
import {User} from "../../models/models";
import {NativeStorage} from "@ionic-native/native-storage";

@Component({
  selector: 'page-enterotp',
  templateUrl: 'enter-otp.html',
})
export class EnterOtpPage implements OnInit {

  public logoUrl = "assets/icon/icon.png";
  otp: string;
  generatedOtp: string;
  user: User;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public sms: SMS,
              public toastCtrl: ToastController,
              public userService: UserService,
              public httpService: HttpService,
              public nativeStorage: NativeStorage) {
    this.generatedOtp = Math.floor(1000 + Math.random() * 9000) + '';
    console.log(this.generatedOtp);
  }

  ngOnInit() {
    this.user = this.navParams.get('user');
    this.sms.send(this.user.mobile + '', 'The OTP for FarmEdge is ' + this.generatedOtp + '.');
  }

  onEvent = (event: string): void => {
    if (this.otp == null) {
      this.presentToast('Please enter the OTP.');
      return;
    }

    if (event === 'onDone' && this.otp === this.generatedOtp) {
      if (this.navParams.get('page') === 'login') {
        this.nativeStorage.setItem('user', this.user)
          .then(() => {
            this.userService.setUser(this.user);
            this.navCtrl.setRoot(TabsPage);
          });
        // this.userService.setUser(this.user);
        // this.navCtrl.setRoot(TabsPage);
      } else if (this.navParams.get('page') === 'register') {
        this.httpService.registerUser(this.user)
          .then((response) => {
            this.nativeStorage.setItem('user', response.user)
              .then(() => {
                this.userService.setUser(response.user);
                this.navCtrl.setRoot(TabsPage);
                this.navCtrl.push(RegisteredDevicesPage);
              });
            // this.navCtrl.setRoot(TabsPage);
            // this.navCtrl.push(RegisteredDevicesPage);
          });
      }
    } else {
      this.presentToast('Please enter correct OTP.');
      return;
    }
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });

    toast.present();
  }
}
