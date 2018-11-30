import {Component, ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Chart} from 'chart.js';
import {HttpService} from "../../services/http-service";

@Component({
  selector: 'page-usage1week',
  templateUrl: 'usage1week.html',
})
export class Usage1weekPage {


  @ViewChild('barCanvas') barCanvas;

  barChart: any;
  operations;

  constructor(public navCtrl: NavController,
              public httpService: HttpService) {

  }

  ionViewDidEnter() {
    this.barChart = null;
    this.httpService.getOperations()
      .then((response) => {
        let today = new Date();
        let today_0 = today.getDate() + '/' + today.getMonth();
        let time_0 = 0;
        response.operations.forEach((item) => {
          let onTime = new Date(item.onTime);
          let offTime = new Date(item.offTime);
          if (onTime.getDate() == today.getDate() && onTime.getMonth() == today.getMonth()) {
            let diff = Math.abs(offTime.getTime() - onTime.getTime());
            let diffSec = Math.ceil(diff / (1000 * 60));
            time_0 = time_0 + diffSec;
          }
        });


        today.setDate(today.getDate() - 1);
        let today_1 = today.getDate() + '/' + today.getMonth();
        let time_1 = 0;
        response.operations.forEach((item) => {
          let onTime = new Date(item.onTime);
          let offTime = new Date(item.offTime);
          if (onTime.getDate() == today.getDate() && onTime.getMonth() == today.getMonth()) {
            let diff = Math.abs(offTime.getTime() - onTime.getTime());
            let diffSec = Math.ceil(diff / (1000 * 60));
            time_1 = time_1 + diffSec;
          }
        });


        today.setDate(today.getDate() - 1);
        let today_2 = today.getDate() + '/' + today.getMonth();
        let time_2 = 0;
        response.operations.forEach((item) => {
          let onTime = new Date(item.onTime);
          let offTime = new Date(item.offTime);
          if (onTime.getDate() == today.getDate() && onTime.getMonth() == today.getMonth()) {
            let diff = Math.abs(offTime.getTime() - onTime.getTime());
            let diffSec = Math.ceil(diff / (1000 * 60));
            time_2 = time_2 + diffSec;
          }
        });

        today.setDate(today.getDate() - 1);
        let today_3 = today.getDate() + '/' + today.getMonth();
        let time_3 = 0;
        response.operations.forEach((item) => {
          let onTime = new Date(item.onTime);
          let offTime = new Date(item.offTime);
          if (onTime.getDate() == today.getDate() && onTime.getMonth() == today.getMonth()) {
            let diff = Math.abs(offTime.getTime() - onTime.getTime());
            let diffSec = Math.ceil(diff / (1000 * 60));
            time_3 = time_3 + diffSec;
          }
        });

        today.setDate(today.getDate() - 1);
        let today_4 = today.getDate() + '/' + today.getMonth();
        let time_4 = 0;
        response.operations.forEach((item) => {
          let onTime = new Date(item.onTime);
          let offTime = new Date(item.offTime);
          if (onTime.getDate() == today.getDate() && onTime.getMonth() == today.getMonth()) {
            let diff = Math.abs(offTime.getTime() - onTime.getTime());
            let diffSec = Math.ceil(diff / (1000 * 60));
            time_4 = time_4 + diffSec;
          }
        });

        today.setDate(today.getDate() - 1);
        let today_5 = today.getDate() + '/' + today.getMonth();
        let time_5 = 0;
        response.operations.forEach((item) => {
          let onTime = new Date(item.onTime);
          let offTime = new Date(item.offTime);
          if (onTime.getDate() == today.getDate() && onTime.getMonth() == today.getMonth()) {
            let diff = Math.abs(offTime.getTime() - onTime.getTime());
            let diffSec = Math.ceil(diff / (1000 * 60));
            time_5 = time_5 + diffSec;
          }
        });

        today.setDate(today.getDate() - 1);
        let today_6 = today.getDate() + '/' + today.getMonth();
        let time_6 = 0;
        response.operations.forEach((item) => {
          let onTime = new Date(item.onTime);
          let offTime = new Date(item.offTime);
          if (onTime.getDate() == today.getDate() && onTime.getMonth() == today.getMonth()) {
            let diff = Math.abs(offTime.getTime() - onTime.getTime());
            let diffSec = Math.ceil(diff / (1000 * 60));
            time_6 = time_6 + diffSec;
          }
        });


        this.barChart = new Chart(this.barCanvas.nativeElement, {
          type: 'bar',
          data: {
            labels: [today_6, today_5, today_4, today_3, today_2, today_1, today_0],
            datasets: [{
              label: 'Run Time (Min)',
              data: [time_6, time_5, time_4, time_3, time_2, time_1, time_0],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }

        });
      });
  }

}
