import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TrainingComponent } from './training/training.component';
import { PaddlersComponent } from './paddlers/paddlers.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AttendanceDetailComponent } from './attendance-detail/attendance-detail.component';
import { ProgramDetailComponent } from './program-detail/program-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent,
    PaddlersComponent,
    LeaderboardComponent,
    PageNotFoundComponent,
    AttendanceDetailComponent,
    ProgramDetailComponent,
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
