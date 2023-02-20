import { Component, OnInit } from '@angular/core';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { filter, interval, map, Observable, tap, take, mergeMap, delay, of, concatMap, exhaustMap, switchMap } from 'rxjs';
import { ChartType, ChartColor } from 'chart.js';
import { Color } from 'ng2-charts/lib/color';
import { Olympic } from '../../core/models/Olympic';
import{Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public olympics$: Observable<any> = of(null);

  public allList: Array<Olympic> = [];
  public countryList: Array<string> = [];
  public medailList: Array<number> = [];
  public idList: Array<number> = [];
  public numberJo: number = 0;
  public numberCountry: number = 0;

  // Pie
  public pieChartLabels: string[] = this.countryList;
  public pieChartData: number[] = this.medailList;
  public pieChartColor: Color[] = [{
    backgroundColor: ['rgba(121,61,82,255)', 'rgba(137,161,219,255)', 'rgba(151,128,161,255)', 'rgba(191,224,241,255)', 'rgba(184,203,231,255)', 'rgba(149,96,101,255)']
  }];


  constructor(private olympicService: OlympicService, private router : Router) { }

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics().pipe(map(value => value == undefined ? `je suis ${value}` : this.adder(value)));
  }

  adder(payslist: Array<Olympic>) {
    payslist.forEach(pays => {
      let medail = 0;

      this.allList.push(pays);
      this.countryList.push(pays.country);
      pays.participations.forEach(participation => {
        medail += participation.medalsCount
      })
      this.medailList.push(medail);
      this.numberCountry = this.countryList.length
      this.numberJo = payslist[0].participations.length
    })
  };

  // events
  public chartClicked(e: any): void {

    if (e.active.length > 0) {
      const chart = e.active[0]._chart;
      const activePoints = chart.getElementAtEvent(e.event);
        if ( activePoints.length > 0) {
          // get the internal index of slice in pie chart
          const clickedElementIndex = activePoints[0]._index;
          var label = chart.data.labels[clickedElementIndex];
          // get value by index
          console.log(clickedElementIndex, label)
        }
       }
    console.log(e.active[0]._index);
    this.router.navigateByUrl(`detail/${label}`);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}