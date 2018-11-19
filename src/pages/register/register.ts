import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {EnterOtpPage} from "../enter-otp/enter-otp";
import {User} from "../../models/models";
import {HttpService} from "../../services/http-service";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage implements OnInit{

  public logoUrl = "assets/icon/icon.png";
  public spinner = "assets/svg/puff.svg";
  name: string;
  mobile: number;
  email: string;
  location: string;
  loading:boolean = false;

  user = new User();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpService: HttpService,
              public toastCtrl: ToastController) {
    this.loading = true;
  }

  ngOnInit(){
    this.loading = false;
  }

  onEvent = (event: string): void => {
    this.loading = true;
    if (event === 'onRegister') {
      if (this.name == null || this.email == null || this.mobile == null || this.location == null) {
        this.loading = false;
        this.presentToast('Please give all inputs.');
        return;
      }
      if (this.mobile == null || +this.mobile < 999999999 || +this.mobile > 9999999999) {
        this.presentToast('Please enter a valid mobile number.');
        this.loading = false;
        return;
      }
      this.user.name = this.name;
      this.user.mobile = this.mobile;
      this.user.email = this.email;
      this.user.location = this.location;
      this.httpService.getUser(this.mobile)
        .then((response) => {
          if (response.user != null) {
            this.loading = false;
            this.presentToast('User already exists with this mobile number.');
          } else {
            this.loading = false;
            this.navCtrl.push(EnterOtpPage, {page: 'register', user: this.user});
          }
        })
    } else if (event === "onHaveAccount") {
      this.loading = false;
      this.navCtrl.setRoot(LoginPage);
    }
  }

  presentToast = (message: string) => {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });

    toast.present();
  }

}
