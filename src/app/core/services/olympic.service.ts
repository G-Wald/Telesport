import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Olympic } from '../models/Olympic';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';

  constructor(private http: HttpClient) { }

  loadInitialData() {
    return this.http.get<Array<Olympic>>(this.olympicUrl).pipe(
      catchError((error, caught) => {
        console.error(error);
        return caught;
      })
    );
  };
}
