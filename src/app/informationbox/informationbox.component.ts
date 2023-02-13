import { Component, OnInit, Input } from '@angular/core';
import{Router} from '@angular/router';
import { InformationBox } from '../core/models/informationbox.model';
import { OlympicService } from '../core/services/olympic.service';

@Component({
  selector: 'app-informationbox',
  templateUrl: './informationbox.component.html',
  styleUrls: ['./informationbox.component.scss']
})
export class InformationboxComponent implements OnInit {


  @Input() informationbox!: InformationBox;
  constructor(private olympicService : OlympicService,
    private router : Router) { }

  ngOnInit(): void {
  }

  

}
