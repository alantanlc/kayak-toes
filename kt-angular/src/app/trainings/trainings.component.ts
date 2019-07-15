import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  goToPreviousWeek() {
    console.log('go to previous week');

    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    console.log(year, month, day);

    this.router.navigate([`/trainings/week/${year}/${month}/${day}`]);
  }

  goToNextWeek() {
    console.log('go to next week');
    
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    console.log(year, month, day);

    this.router.navigate([`/trainings/week/${year}/${month}/${day}`]);
  }

}
