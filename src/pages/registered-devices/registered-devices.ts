import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {RegisterDevicePage} from "../register-device/register-device";
import {HttpService} from "../../services/http-service";

@Component({
  selector: 'page-registered-devices',
  templateUrl: 'registered-devices.html',
})
export class RegisteredDevicesPage {

  data = {  "devices": []};

  logoUrl = "assets/images/logo/login.png";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpService: HttpService) {

  }

  ionViewDidEnter(){
    this.httpService.getDevices()
      .then((response) => {
        console.log(response.devices);
        this.data.devices = response.devices;
      });
  }

  onEvent = (event: string, item: any) => {
    if (event === 'onFab') {
      this.navCtrl.push(RegisterDevicePage);
    } else if(event === 'onDevice'){
      this.navCtrl.push(RegisterDevicePage,{device: item});
    }
  }

}
