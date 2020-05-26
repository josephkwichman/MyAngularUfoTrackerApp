import { Component, OnInit } from '@angular/core';
import { SightingsRepoService } from '../_services/sightings-repo.service';
import { Sighting } from '../Sighting';

@Component({
  selector: 'app-sightings-reports',
  templateUrl: './sightings-reports.component.html',
  styleUrls: ['./sightings-reports.component.scss']
})
export class SightingsReportsComponent implements OnInit {

  sightings: Sighting[];
  sightingsRepoServiceService: any;

  constructor(sightingsRepoService: SightingsRepoService) {
    this.sightings = sightingsRepoService.getSightings();
   }

  ngOnInit(): void {

  }

}
