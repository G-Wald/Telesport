import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationBoxListComponent } from './information-box-list.component';

describe('InformationBoxListComponent', () => {
  let component: InformationBoxListComponent;
  let fixture: ComponentFixture<InformationBoxListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationBoxListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationBoxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
