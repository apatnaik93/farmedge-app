import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {UserService} from "../../services/user.service";
import {User} from "../../models/models";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit{

  logoUrl = "assets/images/logo/login.png";
  user:User;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userService: UserService) {
  }

  ngOnInit(){
    this.user = this.userService.getUser();

  }


}
