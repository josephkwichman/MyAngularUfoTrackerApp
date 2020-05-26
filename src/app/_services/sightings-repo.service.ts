import { Injectable } from '@angular/core';
import { Sighting } from '../Sighting';


@Injectable({
  providedIn: 'root'
})
export class SightingsRepoService {
 public getSightings() {
  let sightings: Sighting[];

  sightings = [
    new Sighting(1, new Date(2012, 0, 1), `Close Encounter of 1st kind`, 36.286001, -87.072900),
    new Sighting(2, new Date(2013, 11, 1), `Close Encounter of 2nd kind`, 35.712905, -88.532133),
    new Sighting(3, new Date(2014, 11, 1), `Close Encounter of 3rd kind`, 35.126444, -89.931457),
    new Sighting(4, new Date(2015, 11, 1), `Colse Encounter of 4th kind`, 36.088578, -84.981846),
    new Sighting(5, new Date(1987, 4, 1), `Ask John V. for more info.`, 41.875635, -87.618927),
    new Sighting(6, new Date(2017, 11, 1), `Colse Encounter of 6th kind`, 41.382929, -99.901647),
    new Sighting(7, new Date(2018, 11, 1), `Close Encounter of 7th kind`, 29.552205, -82.556644),
    new Sighting(8, new Date(2018, 11, 1), `Close Encounter of 8th kind`, 31.799688, -97.436459),
    new Sighting(9, new Date(2018, 11, 1), `Close Encounter of 9th kind`, 33.431854, -104.517295)
  ];

  return sightings;
 }
}

