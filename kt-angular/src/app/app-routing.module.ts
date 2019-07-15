import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingsComponent } from './trainings/trainings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MembersComponent } from './members/members.component';
import { TimeTrialsComponent } from './time-trials/time-trials.component';


const routes: Routes = [
  { path: '', redirectTo: '/trainings/week', pathMatch: 'full' },
  { path: 'trainings', redirectTo: '/trainings/week', pathMatch: 'full' },
  { path: 'trainings/week', component: TrainingsComponent },
  { path: 'trainings/week/:year', component: TrainingsComponent },
  { path: 'trainings/week/:year/:month', component: TrainingsComponent },
  { path: 'trainings/week/:year/:month/:day', component: TrainingsComponent },
  { path: 'members', component: MembersComponent },
  { path: 'timetrials', component: TimeTrialsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
