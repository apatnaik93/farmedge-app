import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {HttpService} from "../../services/http-service";
import {UserService} from "../../services/user.service";
import {EnterOtpPage} from "../enter-otp/enter-otp";
import {NativeStorage} from "@ionic-native/native-storage";
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {
  public logoUrl = "assets/icon/icon.png";
  public spinner = "assets/svg/puff.svg";
  public loading = true;
  public mobile: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpService: HttpService,
              public userService: UserService,
              public toastCtrl: ToastController,
              public nativeStorage: NativeStorage) {
    this.loading = true;
  }

  ngOnInit() {
    this.nativeStorage.getItem('user')
      .then((user) => {
        this.userService.setUser(user);
        this.navCtrl.setRoot(TabsPage);
        this.loading = false;
      },(err)=>{
        this.loading = false;
      });
    //this.loading = false;
  }

  onEvent = (event: string): void => {
    this.loading = true;
    if (event === "onRegister") {
      this.loading = false;
      this.navCtrl.push(RegisterPage);
    } else if (event === "onLogin") {
      if (this.mobile == null || +this.mobile < 999999999 || +this.mobile > 9999999999) {
        this.presentToast('Please enter a valid mobile number.');
        this.loading = false;
        return;
      }
      this.httpService.getUser(this.mobile)
        .then((response) => {
          if (response.user != null) {
            this.loading = false;
            this.navCtrl.push(EnterOtpPage, {page: 'login', user: response.user});
            // this.userService.setUser(response.user);
            // this.navCtrl.setRoot(TabsPage);
          } else {
            this.loading = false;
            this.presentToast('No user exists with this mobile number.');
          }
        })
    }
  }

  presentToast = (message: string): void => {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }
}
