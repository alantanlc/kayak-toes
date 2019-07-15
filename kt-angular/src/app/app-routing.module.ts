import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingsComponent } from './trainings/trainings.component';
import { PaddlersComponent } from './paddlers/paddlers.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/trainings/week', pathMatch: 'full' },
  { path: 'trainings', redirectTo: '/trainings/week', pathMatch: 'full' },
  { path: 'trainings/week', component: TrainingsComponent },
  { path: 'trainings/week/:year', component: TrainingsComponent },
  { path: 'trainings/week/:year/:month', component: TrainingsComponent },
  { path: 'trainings/week/:year/:month/:day', component: TrainingsComponent },
  { path: 'paddlers', component: PaddlersComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
