import { Component, OnInit } from '@angular/core';
import { athletes } from '../mock';

@Component({
  selector: 'app-athletes',
  templateUrl: './athletes.component.html',
  styleUrls: ['./athletes.component.scss']
})
export class AthletesComponent implements OnInit {

  athletes = athletes;

  constructor() { }

  ngOnInit() {
  }

}
