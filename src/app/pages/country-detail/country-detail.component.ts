import { Component, OnInit } from '@angular/core';
import { Olympic } from 'src/app/core/models/Olympic';
import { filter, interval, map, Observable, tap, take, mergeMap, delay, of, concatMap, exhaustMap, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Color } from 'ng2-charts/lib/color';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { __values } from 'tslib';


@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  public olympics$: Olympic;
  public medailList : number[];

  private idCountry: string;

  constructor(private route: ActivatedRoute, private olympicService: OlympicService) {
    this.olympics$ = new Olympic;
    this.medailList = [];
    this.idCountry = "";
  }
   
    public yearList : string[] =[];
    // Pie
    public pieChartLabels: string[] = this.yearList;
    public pieChartData: number[] = [];
    public pieChartColor: Color[] = [{
      backgroundColor: ['rgba(121,61,82,255)', 'rgba(137,161,219,255)', 'rgba(151,128,161,255)', 'rgba(191,224,241,255)', 'rgba(184,203,231,255)', 'rgba(149,96,101,255)']
    }];

  ngOnInit(): void {
    this.idCountry = this.route.snapshot.params['id'];
    this.olympicService.loadInitialData()
      .subscribe({
        next: (value => {
          console.log("toto" + JSON.stringify(value));
          //value == undefined ? value : this.adder(value)
        })
      });
  }

  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }

  adder(payslist: Array<Olympic>) {
    const paysListeSelectionne: Olympic[] = payslist.filter(pays => pays.country === this.idCountry );
      paysListeSelectionne.forEach(pays => {
          pays.participations.forEach(participation=>{
            this.medailList.push(participation.medalsCount);
            this.yearList.push(participation.year.toString());
          })
        });
      
    console.log(`medail ${this.medailList}`);
    console.log(`year ${this.yearList}`);
  };
}
