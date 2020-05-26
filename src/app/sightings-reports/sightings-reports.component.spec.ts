import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SightingsReportsComponent } from './sightings-reports.component';

describe('SightingsReportsComponent', () => {
  let component: SightingsReportsComponent;
  let fixture: ComponentFixture<SightingsReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SightingsReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SightingsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
