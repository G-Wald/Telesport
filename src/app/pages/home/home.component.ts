import { Component, OnInit } from '@angular/core';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { ChartType, Chart } from 'chart.js';
import { Color } from 'ng2-charts/lib/color';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public pieChartLabels: Array<string>;
  public pieChartData: Array<number>;
  public pieChartOption: object;
  public idList: Array<number>;
  public numberJo: number;
  public numberCountry: number;
  public medail: number;
  public pieChartColor: Color[] = [{
    backgroundColor: ['rgba(121,61,82,255)', 'rgba(137,161,219,255)', 'rgba(151,128,161,255)', 'rgba(191,224,241,255)', 'rgba(184,203,231,255)', 'rgba(149,96,101,255)']
  }];
  public pieChartType: ChartType = "pie";


  constructor(private olympicService: OlympicService, private router: Router) {
    this.pieChartLabels = [];
    this.pieChartData = [];
    this.idList = [];
    this.numberJo = 0;
    this.numberCountry = 0;
    this.medail = 0;
    this.pieChartOption = {
      responsive: true,
      legend: false,
      outlabels: {
        text: "%l %p",
        color: "white",
        stretch: 35,
        font: {
          resizable: true,
          minSize: 12,
          maxSize: 18
        }
      }
    };
  }

  ngOnInit(): void {
    this.olympicService.loadInitialData()
      .subscribe({
        next: (
          value => {
            this.numberCountry = value.length;
            this.numberJo = value[0].participations.length;
            value.forEach(element => {
              this.pieChartLabels.push(element.country)
              this.medail = 0;
              if (element.participations) {
                element.participations.forEach(participation => {
                  this.medail += participation.medalsCount;
                })
              }
              this.pieChartData.push(this.medail)
              //this.pieChartData.push(element)

            });
            console.log(JSON.stringify(value));
          })
      });
  }

  // events
  public chartClicked(e: any): void {

    if (e.active.length > 0) {
      const chart = e.active[0]._chart;
      const activePoints = chart.getElementAtEvent(e.event);
      if (activePoints.length > 0) {
        // get the internal index of slice in pie chart
        var clickedElementIndex = activePoints[0]._index;
        var label = chart.data.labels[clickedElementIndex];
        // ratacher à l'ID et le label
        // get value by index
        console.log(clickedElementIndex, label)
      }
    }
    console.log(e.active[0]._index);
    this.router.navigateByUrl(`detail/${clickedElementIndex + 1}`);

    console.log(e);
  }
}