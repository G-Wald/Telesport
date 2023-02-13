import { Component, OnInit } from '@angular/core';
import { InformationBox } from '../core/models/informationbox.model';
import { OlympicService } from '../core/services/olympic.service';
import { filter, interval, map, Observable, tap, take, mergeMap, delay, of, concatMap, exhaustMap, switchMap } from 'rxjs';
import { Olympic } from '../core/models/Olympic';

@Component({
  selector: 'app-information-box-list',
  templateUrl: './information-box-list.component.html',
  styleUrls: ['./information-box-list.component.scss']
})
export class InformationBoxListComponent implements OnInit {

  constructor(private olympicService: OlympicService) { }
  informationBoxs!: InformationBox[];
  public olympics$!: Observable<string> ;


  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics().pipe(map(value => value == undefined ? `je suis ${value}` : `le pays est ${value[1].country}`),tap(text => this.logger (text)));
  
  }

  logger(text : unknown){
    console.log(text);
    
  }

  boxer(title: string) {
    this.informationBoxs = [{
      title: title,
      number: 5
    },
    {
      title: "hello",
      number: 5
    }]
  }

}

//