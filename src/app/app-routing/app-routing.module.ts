import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutUfoTrackerComponent } from '../about-ufo-tracker/about-ufo-tracker.component';
import { SightingsReportsComponent } from '../sightings-reports/sightings-reports.component';
import { TableViewSightingsComponent } from '../table-view-sightings/table-view-sightings.component';
import { SightingsLeafletMapComponent } from '../sightings-leaflet-map/sightings-leaflet-map.component';

const routes: Routes = [
  {
    path: '',
    component: SightingsReportsComponent,
  },
  {
    path: 'about-ufo-tracker',
    component: AboutUfoTrackerComponent,
  },
  {
    path: 'table-view-sightings',
    component: TableViewSightingsComponent,
  },
  {
    path: 'sightings-leaflet-map',
    component: SightingsLeafletMapComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
