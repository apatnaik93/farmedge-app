import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Device} from "../../models/models";
import {UserService} from "../../services/user.service";
import {HttpService} from "../../services/http-service";
import {SMS} from "@ionic-native/sms";

@Component({
  selector: 'page-register-devices',
  templateUrl: 'register-device.html',
})
export class RegisterDevicePage {
  public logoUrl = "assets/imgs/logo.png";

  deviceName: string;
  simNumber: string;
  location: string;
  device: Device;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userService: UserService,
              public sms: SMS,
              public httpService: HttpService) {
    if (navParams.get('device')) {
      this.device = navParams.get('device');
      this.deviceName = this.device.name;
      this.simNumber = this.device.simNumber;
      this.location = this.device.location;
    } else {
      this.device = new Device();
    }
  }

  onEvent = (event: string): void => {
    if (event === 'onSave') {
      this.sms.send( this.simNumber + '', 'S1' + this.userService.getUser().mobile);
      this.device.name = this.deviceName;
      this.device.location = this.location;
      this.device.simNumber = this.simNumber;
      this.device.userId = this.userService.getUser().userId;
      this.httpService.registerDevice(this.device)
        .then((response) => {
          console.log(response.device);
          this.navCtrl.pop();
        });
    }
  }

}
