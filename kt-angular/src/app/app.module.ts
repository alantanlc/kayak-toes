import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { BoatsComponent } from './boats/boats.component';
import { AthletesComponent } from './athletes/athletes.component';
import { AthleteDetailComponent } from './athlete-detail/athlete-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TrainingsComponent,
    LeaderboardComponent,
    BoatsComponent,
    AthletesComponent,
    AthleteDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
