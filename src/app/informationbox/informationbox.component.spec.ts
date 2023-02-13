import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationboxComponent } from './informationbox.component';

describe('InformationboxComponent', () => {
  let component: InformationboxComponent;
  let fixture: ComponentFixture<InformationboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
