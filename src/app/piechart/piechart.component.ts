import { Component, OnInit } from '@angular/core';
import {ChartType} from 'chart.js';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {


   // Pie
   public pieChartLabels:string[] = ['Chrome', 'Safari', 'Firefox','Internet Explorer','Other'];
   public pieChartData:number[] = [40, 20, 20 , 10,10];
   public pieChartType:ChartType = 'pie';
  
    // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
