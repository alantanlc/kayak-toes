import { Component, OnInit } from '@angular/core';
import { members } from '../mock';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  members = members;

  constructor() { }

  ngOnInit() {
  }

}
