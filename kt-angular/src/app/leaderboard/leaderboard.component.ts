import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { leaderboard, reference } from '../mock';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  displayedColumns: string[] = ['affiliate', 'athlete', /*'boat', 'datetime',*/ 'result'];
  dataSource: MatTableDataSource<any>;

  boats: any[];
  genders: any[];
  distances: any[];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.boats = reference.filter(ref => ref.category === 'boat');
    this.genders = reference.filter(ref => ref.category === 'gender');
    this.distances = reference.filter(ref => ref.category === 'distance');

    this.dataSource = new MatTableDataSource(leaderboard.filter(
      record => 
        record.category.boat === this.boats[0].value
        && record.category.gender === this.genders[0].value
        && record.category.distance === this.distances[0].value
      ));
    this.dataSource.sort = this.sort;
  }
  
  filterByBoat(boat: string) {
    this.dataSource.data = leaderboard.filter(record => record.category.boat === boat);
  }
  
  filterByGender(gender: string) {
    this.dataSource.data = leaderboard.filter(record => record.category.gender === gender);
  }

  filterByDistance(distance: string) {
    this.dataSource.data = leaderboard.filter(record => record.category.distance === distance);
  }

  isFirstBoat(boat: any) {
    return this.boats.indexOf(boat) === 0;
  }

  isFirstGender(gender: any) {
    return this.genders.indexOf(gender) === 0;
  }

  isFirstDistance(distance: any) {
    return this.distances.indexOf(distance) === 0;
  }

}
