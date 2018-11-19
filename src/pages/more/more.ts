import {Component} from '@angular/core';
import {App, NavController, NavParams} from 'ionic-angular';
import {RegisteredDevicesPage} from "../registered-devices/registered-devices";
import {LoginPage} from "../login/login";
import {NativeStorage} from "@ionic-native/native-storage";

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
        "title": "Weather Details",
        "description": "Get weather Details",
        "image": "assets/images/logo/login.png"
      },
      {
        "id": 3,
        "title": "Agricultural News",
        "description": "Get the latest agricultural News",
        "image": "assets/images/logo/login.png"
      },
      {
        "id": 4,
        "title": "Government Schemes",
        "description": "Know about the govt schemes.",
        "image": "assets/images/logo/login.png"
      },
      {
        "id": 5,
        "title": "Agro Advisory",
        "description": "Advosory related to your farm.",
        "image": "assets/images/logo/login.png"
      },
      {
        "id": 6,
        "title": "Registered Devices",
        "description": "List of registered Devices",
        "image": "assets/images/logo/login.png"
      },
      {
        "id": 7,
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
      }
    }
  }

}
