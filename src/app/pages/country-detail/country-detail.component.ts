import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { __values } from 'tslib';
import { Color } from 'ng2-charts'
import {Router} from '@angular/router';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  public ChartLabels: string[];
  public ChartOption: object;
  public ChartData: number[];
  public ChartColor: Color[];
  public entriesNumber: number;
  public athletesNumber: number;
  public medalsNumber: number;
  public countryName: string;
  private idCountry: string;

  constructor(private router :Router, private route: ActivatedRoute, private olympicService: OlympicService) {
    this.ChartData = [];
    this.ChartLabels = [];
    this.ChartColor = [{ pointRadius: 1,backgroundColor: 'rgba(137,161,219,255)', borderColor: 'rgba(137,161,219,255)' }]
    this.entriesNumber = 0;
    this.athletesNumber = 0;
    this.medalsNumber = 0;
    this.countryName = "";
    this.idCountry = "";
    this.ChartOption = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          }
        ]
      },
      elements: {
          line: {
                  fill: false
          }
      }
    };
  }
  

  ngOnInit(): void {
    this.idCountry = this.route.snapshot.params['id'];
    this.olympicService.loadInitialData()
      .subscribe({
        next: (value => {
          console.log(value)
          value.forEach(element => {
            this.entriesNumber = element.participations.length;
            if (element.id.toString() == this.idCountry) {
              this.countryName = element.country;
              element.participations.forEach(participation => {
                this.athletesNumber += participation.athleteCount;
                this.medalsNumber += participation.medalsCount;
                this.ChartData.push(participation.medalsCount);
                this.ChartLabels.push(participation.year.toString());
              })
            }
          });
          console.log(JSON.stringify(value));
        })
      });
  }

  return():void{
    this.router.navigateByUrl('');
  }
}
