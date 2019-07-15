import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PaddlersComponent } from './paddlers/paddlers.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TrainingsComponent } from './trainings/trainings.component';

@NgModule({
  declarations: [
    AppComponent,
    PaddlersComponent,
    LeaderboardComponent,
    PageNotFoundComponent,
    TrainingsComponent,
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
