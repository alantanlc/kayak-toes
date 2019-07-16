import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { leaderboard } from '../mock';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  displayedColumns: string[] = ['affiliate', 'athlete', /*'boat', 'datetime',*/ 'result'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(leaderboard.filter(record => record.category === '200m'));
    this.dataSource.sort = this.sort;
  }

  filter(category: string) {
    console.log(category);
    this.dataSource.data = leaderboard.filter(record => record.category === category);
    console.log(this.dataSource.data);
  }

}
