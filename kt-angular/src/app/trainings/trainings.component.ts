import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export const attendees = [
  {
    user: {
      displayname: 'cym'
    },
    boat: {
      displayname: 'ak09',
      color: 'red',
      ca: 4061
    }
  },
  {
    user: {
      displayname: 'jiajun'
    },
    boat: {
      displayname: 'white kape',
      color: 'white',
      ca: 4061
    }
  },
  {
    user: {
      displayname: 'pm'
    },
    boat: {
      displayname: 'sete',
      color: 'red',
      ca: 4061
    }
  },
  {
    user: {
      displayname: 'yz'
    },
    boat: {
      displayname: 'rapt08',
      color: 'red',
      ca: 4061
    }
  },
  {
    user: {
      displayname: 'hens'
    },
    boat: {
      displayname: 'blue rapt',
      color: 'blue',
      ca: 4061
    }
  },
  {
    user: {
      displayname: 'grainny'
    },
    boat: {
      displayname: 'rapt07',
      color: 'red',
      ca: 4061
    }
  },
  {
    user: {
      displayname: 'gab'
    },
    boat: {
      displayname: 'ak10',
      color: 'red',
      ca: 4061
    }
  },
  {
    user: {
      displayname: 'jessica'
    },
    boat: {
      displayname: 'tiger',
      color: 'red',
      ca: 4061
    }
  },
  {
    user: {
      displayname: 'sujie'
    },
    boat: {
      displayname: 'quattro ml',
      color: 'red',
      ca: 4061
    }
  },
  {
    user: {
      displayname: 'gwen'
    },
    boat: {
      displayname: 'v2',
      color: 'white',
      ca: 4061
    }
  },
];

export const data = [
  {
    programme: "2km warmup\n2.5km tech ex with 1 ball\n2.5km tech ex with 2 balls\n3km tech paddling no balls\n2km cool down",
    venue: 'MacRitchie Reservoir',
    startTime: new Date('7/15/2019'),
    endTime: new Date,
    attendees: attendees
  },
  {
    programme: "2km warm up\n2 x (5x5/1') + 2' rest\n1st big set:\n2nd ex-L3-3-4-5\n2nd big set:\nL5-3-3-3-5\n2km cool down",
    venue: 'MacRitchie Reservoir',
    startTime: new Date('7/16/2019'),
    endTime: new Date,
    attendees: attendees
  },
  {
    programme: "2km warm up\n6km light aerobic\n6km heavy aerobic\nCan wash ride (can only stop to drink or wait for each other after each aerobic stage is completed)\n2km cool down",
    venue: 'MacRitchie Reservoir',
    startTime: new Date('7/17/2019'),
    endTime: new Date,
    attendees: attendees
  },
  {
    programme: "2km warm up\n3 x 2km / 20'\n1st set time trial\n2nd set 80%\n3rd set 200m off 200m on\n2km cool down",
    venue: 'MacRitchie Reservoir',
    startTime: new Date('7/18/2019'),
    endTime: new Date,
    attendees: attendees
  },
  {
    programme: "10km tech paddling",
    venue: 'MacRitchie Reservoir',
    startTime: new Date('7/19/2019'),
    endTime: new Date,
    attendees: attendees
  },
  {
    programme: "4km warm up\n2km time trial / 20'\n200m time trial\n2km cool down",
    venue: 'MacRitchie Reservoir',
    startTime: new Date('7/20/2019'),
    endTime: new Date,
    attendees: attendees
  },
  {
    programme: "",
    venue: '',
    startTime: new Date('7/21/2019'),
    endTime: '',
    attendees: []
  },
];

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {

  trainings = data;

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

  dateIsToday(date: Date) {
    return date.toLocaleDateString() === new Date().toLocaleDateString();
  }

}
