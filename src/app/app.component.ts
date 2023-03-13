import { Component, OnInit } from '@angular/core';
import { take, Observable, } from 'rxjs';
import { OlympicService } from './core/services/olympic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private olympicService: OlympicService) { }

  interval$!: Observable<string>;

  ngOnInit(): void {
  }
}
