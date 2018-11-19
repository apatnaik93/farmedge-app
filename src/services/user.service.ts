import {Injectable} from '@angular/core';
import {User} from "../models/models";
import {NavController} from "ionic-angular";

@Injectable()
export class UserService {
  user;
  navCtrl: NavController;

  constructor() {
  }

  setUser(user: User) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  setNav(nav: NavController){
    this.navCtrl = nav;
  }

  getNav() {
    return this.navCtrl;
  }

}
