import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SightingsReportsComponent } from './sightings-reports/sightings-reports.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';
// import {MatButton} from '@angular/material/button';
// import {MatCheckbox} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { AboutUfoTrackerComponent } from './about-ufo-tracker/about-ufo-tracker.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TableViewSightingsComponent } from './table-view-sightings/table-view-sightings.component';
import { MatTableModule } from '@angular/material/table';
import { SightingsLeafletMapComponent } from './sightings-leaflet-map/sightings-leaflet-map.component';
import { MarkerService } from './_services/marker.service';





@NgModule({
  declarations: [
    AppComponent,
    SightingsReportsComponent,
    AboutUfoTrackerComponent,
    TableViewSightingsComponent,
    SightingsLeafletMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatGridListModule,
    // MatButton,
    // MatCheckbox,
    MatIconModule,
    MatSliderModule,
    // MatTableDataSource,
    MatTableModule
  ],
  exports: [
    // MatButton,
    // MatCheckbox,
    MatIconModule
  ],
  providers: [MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
