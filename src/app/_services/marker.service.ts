import { Injectable } from '@angular/core';
import { SightingsRepoService } from './sightings-repo.service';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  sightings;

  constructor(sightingsRepoService: SightingsRepoService) {
    this.sightings = sightingsRepoService.getSightings();
  }


  makeSightingsMarkers(map: L.map): void {
    for (const sighting of this.sightings) {
        const lat = sighting.lat;
        const long = sighting.long;
        const marker = L.marker([lat, long]).addTo(map);
    }


  }
}
