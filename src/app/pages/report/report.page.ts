import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/service/database/database.service';

import { Car } from '../../../model/Car';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  tableStyle = 'material';
  cars: Car[] = [];

  currentMonthAndDay = (new Date).toLocaleString().substring(0, 5);

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    console.log(this.currentMonthAndDay);
    this.getCarsByDate();
    
  }

  private getCarsByDate () {
    this.db.getCarByEntry(this.currentMonthAndDay).then((res: Car[]) => {
      this.cars = res;
    }).catch(err => {

    });
  }

}
