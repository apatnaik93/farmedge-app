import {Component} from '@angular/core';
import {App, NavController, NavParams} from 'ionic-angular';
import {RegisteredDevicesPage} from "../registered-devices/registered-devices";
import {LoginPage} from "../login/login";
import {NativeStorage} from "@ionic-native/native-storage";
import {ProfilePage} from "../profile/profile";

@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  data = {
    "items": [
      {
        "id": 1,
        "title": "Profile",
        "description": "Edit your profile details.",
        "image": "assets/images/logo/login.png"
      },
      {
        "id": 2,
        "title": "Registered Devices",
        "description": "List of registered Devices",
        "image": "assets/images/logo/login.png"
      },
      {
        "id": 3,
        "title": "Logout",
        "description": "Logout of application.",
        "image": "assets/images/logo/login.png"
      }
    ]
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public app: App,
              public nativeStorage: NativeStorage) {
  }

  onEvent = (event: string, title: string) => {
    if (event === 'onItemClick') {
      if (title === 'Registered Devices') {
        this.navCtrl.push(RegisteredDevicesPage);
      } else if (title === 'Logout') {
        this.nativeStorage.clear()
          .then(() => {
            this.app.getRootNav().setRoot(LoginPage);
          })
      } else if(title === 'Profile'){
        this.navCtrl.push(ProfilePage);
      }
    }
  }

}
