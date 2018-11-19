import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';


@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  data: any = {
    "items": [
      {
        "id": 1,
        "title": "Card Title 1",
        "titleHeader": "Lorem Ipsum 1",
        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
        "image": "assets/images/background/22.jpg",
        "button": "EXPLORE",
        "shareButton": "SHARE"
      },
      {
        "id": 2,
        "title": "Card Title 2",
        "titleHeader": "Lorem Ipsum 2",
        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
        "image": "assets/images/background/23.jpg",
        "button": "EXPLORE",
        "shareButton": "SHARE"
      },
      {
        "id": 3,
        "title": "Card Title 3",
        "titleHeader": "Lorem Ipsum 3",
        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
        "image": "assets/images/background/22.jpg",
        "button": "EXPLORE",
        "shareButton": "SHARE"
      },
      {
        "id": 4,
        "title": "Card Title 4",
        "titleHeader": "Lorem Ipsum 4",
        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
        "image": "assets/images/background/23.jpg",
        "button": "EXPLORE",
        "shareButton": "SHARE"
      },
      {
        "id": 5,
        "title": "Card Title 5",
        "titleHeader": "Lorem Ipsum 5",
        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
        "image": "assets/images/background/22.jpg",
        "button": "EXPLORE",
        "shareButton": "SHARE"
      }
    ]
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}
