import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Usage1weekPage} from "../usage1week/usage1week";
import {Usage2weekPage} from "../usage2week/usage2week";
import {Usage1monthPage} from "../usage1month/usage1month";
import {Usage3monthPage} from "../usage3month/usage3month";

@Component({
  selector: 'page-usage',
  templateUrl: 'usage.html',
})
export class UsagePage {

  data = [
    {page: Usage1weekPage, title: "1 Week"},
    {page: Usage2weekPage, title: "2 Weeks"},
    {page: Usage1monthPage, title: "1 Month"},
    {page: Usage3monthPage, title: "3 Months"}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsagePage');
  }

}
