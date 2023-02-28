import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  public ChartLabels : string[];
  public ChartData : number[];
  public entriesNumber: number;
  public athletesNumber: number;
  public medalsNumber: number;
  public countryName: string;
  private idCountry: string;

  constructor(private route: ActivatedRoute, private olympicService: OlympicService) {
    this.ChartData = [];
    this.ChartLabels = [];
    this.entriesNumber =0;
    this.athletesNumber =0;
    this.medalsNumber =0;
    this.countryName = "";
    this.idCountry = "";
  }

  ngOnInit(): void {
    this.idCountry = this.route.snapshot.params['id'];
    this.olympicService.loadInitialData()
      .subscribe({
        next: (value => { console.log(value)
          value.forEach(element => {
            this.entriesNumber = element.participations.length;
          if(element.id.toString() == this.idCountry){
            this.countryName = element.country;
            element.participations.forEach(participation=>{
              this.athletesNumber += participation.athleteCount;
              this.medalsNumber += participation.medalsCount;
              this.ChartData.push(participation.medalsCount);
            this.ChartLabels.push(participation.year.toString());
            })
          }
        });
          console.log( JSON.stringify(value));
        })
      });
  }
}
