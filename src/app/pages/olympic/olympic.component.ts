import { Component, OnInit } from '@angular/core';
import { Olympic } from 'src/app/core/models/Olympic';
import { filter, interval, map, Observable, tap, take, mergeMap, delay, of, concatMap, exhaustMap, switchMap } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Color } from 'ng2-charts/lib/color';
import { OlympicService } from 'src/app/core/services/olympic.service';


@Component({
  selector: 'app-olympic',
  templateUrl: './olympic.component.html',
  styleUrls: ['./olympic.component.scss']
})
export class OlympicComponent implements OnInit {

  constructor(private route: ActivatedRoute, private olympicService: OlympicService) { }

  public olympics$: Observable<any> = of(null);

  // Pie
  public pieChartLabels: string[] = ["lol"];
  public pieChartData: number[] = [102];
  public pieChartColor: Color[] = [{
    backgroundColor: ['rgba(121,61,82,255)', 'rgba(137,161,219,255)', 'rgba(151,128,161,255)', 'rgba(191,224,241,255)', 'rgba(184,203,231,255)', 'rgba(149,96,101,255)']
  }];
  public selectedCountry!:Olympic;


  ngOnInit(): void {
    const CountryName = this.route.snapshot.params['id']
    this.olympics$ = this.olympicService.getOlympics().pipe(map(value => value == undefined ? `je suis ${value}` : this.adder(value,CountryName)));
  }

  public chartClicked(e: any): void {

    if (e.active.length > 0) {
      console.log(e);
      ;
    }
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  adder(payslist: Array<Olympic>,CountryName : string) {
    payslist.forEach(pays => {
      if(pays.country == CountryName){
        this.selectedCountry = pays;
      }
    })
  };


}
