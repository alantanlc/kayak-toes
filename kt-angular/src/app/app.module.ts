import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { MembersComponent } from './members/members.component';
import { TimeTrialsComponent } from './time-trials/time-trials.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TrainingsComponent,
    MembersComponent,
    TimeTrialsComponent,
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
