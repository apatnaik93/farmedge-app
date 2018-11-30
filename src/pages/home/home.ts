import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HttpService} from "../../services/http-service";
import {GoogleMap, GoogleMaps} from "@ionic-native/google-maps";
import {NativeStorage} from "@ionic-native/native-storage";
import {SMS} from "@ionic-native/sms";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  map: GoogleMap;
  data = {
    "devices": [],
    'slides': [
      {
        backgroundImage: 'assets/images/avatar-large/1.jpg',
        title: 'Fragment Example 1'
      },
      {
        backgroundImage: 'assets/images/avatar-large/2.jpg',
        title: 'Fragment Example 2'
      },
      {
        backgroundImage: 'assets/images/avatar-large/3.jpg',
        title: 'Fragment Example 3'
      }
    ]
  };

  logoUrl = "assets/images/logo/login.png";
  wetherUrl = "assets/images/weather.png";
  pumpUrl = "assets/images/pump.png";

  weather: any;
  temp: string = '0';

  constructor(public navCtrl: NavController,
              public httpService: HttpService,
              public nativeStorage: NativeStorage,
              public sms: SMS,
              public userService: UserService) {
  }

  ngAfterViewInit() {
    /*this.nativeStorage.getItem('devices')
      .then((devices) => {
        this.data.devices = devices;
      });*/
     this.loadMap();
  }

  ionViewDidEnter() {
    this.httpService.getWeather()
      .then((response)=>{
        this.weather = response;
        this.temp = this.weather.currently.temperature;
      });
    this.httpService.getDevices()
      .then((response) => {
        /*this.nativeStorage.setItem('devices', response.devices)
          .then(() => {
            this.data.devices = response.devices;
          });*/
        this.data.devices = response.devices;
      });
  }

  onEvent(event: string, item: any, e: any) {

  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 43.0741704,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    });
  }

  toggleGroup(group: any) {
    group.show = !group.show;
  }

  isGroupShown(group: any) {
    return group.show;
  }

  onToggleChange(i) {
    if (this.data.devices[i].status) {//on
      this.httpService.onOperation(this.data.devices[i].deviceId)
        .then((response) => {
          if (response.pumpOperation.operationId) {
            this.data.devices[i].status = true;
            this.data.devices[i].operationId = response.pumpOperation.operationId;
            this.sms.send(this.userService.getUser().mobile + '', this.data.devices[i].name + "-" + this.data.devices[i].simNumber + ' :Power ON, Pump ON.');
          }
        })
    } else {//off
      this.httpService.offOperation(this.data.devices[i].deviceId, this.data.devices[i].operationId)
        .then((response) => {
          if (response.pumpOperation.operationId) {
            this.data.devices[i].status = false;
            this.data.devices[i].operationId = null;
            this.sms.send(this.userService.getUser().mobile + '', this.data.devices[i].name + "-" + this.data.devices[i].simNumber + ' :Power ON, Pump OFF.');
          }
        })
    }
  }

}
