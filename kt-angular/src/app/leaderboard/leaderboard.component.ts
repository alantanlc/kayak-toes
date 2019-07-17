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

  activeBoatCategory: string;
  activeGenderCategory: string;
  activeDistanceCategory: string;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.boats = reference.filter(ref => ref.category === 'boat');
    this.genders = reference.filter(ref => ref.category === 'gender');
    this.distances = reference.filter(ref => ref.category === 'distance');

    // Update active categories
    this.activeBoatCategory = this.boats[0].value;
    this.activeGenderCategory = this.genders[0].value;
    this.activeDistanceCategory = this.distances[0].value;

    // Initialize dataSource
    this.dataSource = new MatTableDataSource();
    this.dataSource.sort = this.sort;

    // Update filterRecordsByCategories
    this.filterRecordsByCategories();
  }

  filterRecordsByCategories() {
    this.dataSource.data = leaderboard.filter(
      record =>
        record.category.boat === this.activeBoatCategory
        && record.category.gender === this.activeGenderCategory
        && record.category.distance === this.activeDistanceCategory
    );
  }
  
  filterByBoat(boat: string) {
    this.activeBoatCategory = boat;
    this.filterRecordsByCategories();
  }
  
  filterByGender(gender: string) {
    this.activeGenderCategory = gender;
    this.filterRecordsByCategories();
  }

  filterByDistance(distance: string) {
    this.activeDistanceCategory = distance;
    this.filterRecordsByCategories();
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
