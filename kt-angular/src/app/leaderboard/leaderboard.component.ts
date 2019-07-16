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
  categories: any[];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.categories = reference.filter(ref => ref.category === 'category');
    this.dataSource = new MatTableDataSource(leaderboard.filter(record => record.category === '200m'));
    this.dataSource.sort = this.sort;
  }

  filterByCategory(category: string) {
    this.dataSource.data = leaderboard.filter(record => record.category === category);
  }

  isFirstCategory(category: any) {
    return this.categories.indexOf(category) === 0;
  }

}
