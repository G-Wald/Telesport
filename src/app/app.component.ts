import { Component, OnInit } from '@angular/core';
import { interval, take, Observable, map, filter,tap } from 'rxjs';
import { OlympicService } from './core/services/olympic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private olympicService: OlympicService) {}

  interval$!: Observable<string>;

  ngOnInit(): void {
    this.olympicService.loadInitialData().pipe(take(1)).subscribe();
    
    /*this.interval$ = interval(1000).pipe(
    filter( value => value % 3 ===0),
    map(value => value % 2 === 0 ?
       `Je suis ${value} et je suis pair`:
       `Je suis ${value} et je suis impair`
        ),
       tap(text => this.logger(text))
    );*/
    
  }

}
