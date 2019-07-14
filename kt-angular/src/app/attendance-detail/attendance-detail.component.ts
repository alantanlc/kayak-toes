import { Component, OnInit } from '@angular/core';

export const attendance = [
  {
      id: 1,
      paddler: {
          id: 1,
          shortname: 'cym',
      },
      boat: {
          id: 1,
          shortname: 'ak09',
          color: 'danger',
          ca: 4061
      }                
  },
  {
    id: 2,
    paddler: {
        id: 2,
        shortname: 'jiajun',
    },
    boat: {
        id: 2,
        shortname: 'white kape',
        color: 'light',
        ca: 4061
    }                
  },
  {
    id: 3,
    paddler: {
        id: 3,
        shortname: 'pm',
    },
    boat: {
        id: 3,
        shortname: 'sete',
        color: 'danger',
        ca: 4061
    }                
  },
  {
    id: 3,
    paddler: {
        id: 3,
        shortname: 'hens',
    },
    boat: {
        id: 3,
        shortname: 'blue rapt',
        color: 'primary',
        ca: 4061
    }                
  },
];

@Component({
  selector: 'app-attendance-detail',
  templateUrl: './attendance-detail.component.html',
  styleUrls: ['./attendance-detail.component.scss']
})
export class AttendanceDetailComponent implements OnInit {

  attendances = attendance;

  constructor() { }

  ngOnInit() {
  }

}
