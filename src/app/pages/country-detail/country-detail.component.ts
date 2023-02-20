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

  constructor(private route: ActivatedRoute, private olympicService: OlympicService) { }

  public olympics$: Observable<any> = of(null);
  public medailList : number[] = [];
  public yearList : string[] =[];
  // Pie
  public pieChartLabels: string[] = this.yearList;
  public pieChartData: number[] = this.medailList;
  public pieChartColor: Color[] = [{
    backgroundColor: ['rgba(121,61,82,255)', 'rgba(137,161,219,255)', 'rgba(151,128,161,255)', 'rgba(191,224,241,255)', 'rgba(184,203,231,255)', 'rgba(149,96,101,255)']
  }];





  ngOnInit(): void {
    const CountryName = this.route.snapshot.params['name']
    this.olympics$ = this.olympicService.getOlympics().pipe(map(value => value == undefined ? value : this.adder(value,CountryName)));
  }

  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }

  adder(payslist: Array<Olympic>,CountryName : string) {
    payslist.forEach(pays => {
      console.log(pays)
      if(pays.country == CountryName){
        pays.participations.forEach(participation=>{
          this.medailList.push(participation.medalsCount);
          this.yearList.push(participation.year.toString())
        })}
      
    })
    console.log(`medail ${this.medailList}`);
    console.log(`year ${this.yearList}`);
  };
}
