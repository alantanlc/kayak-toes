import { Component, OnInit } from '@angular/core';
import { boats } from '../mock';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.scss']
})
export class BoatsComponent implements OnInit {

  boats = boats;

  constructor() { }

  ngOnInit() {
  }

}
