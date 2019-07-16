import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { athletes } from '../mock';

@Component({
  selector: 'app-athlete-detail',
  templateUrl: './athlete-detail.component.html',
  styleUrls: ['./athlete-detail.component.scss']
})
export class AthleteDetailComponent implements OnInit {

  athlete: any;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    let displayName = this.activatedRoute.snapshot.paramMap.get('displayName');
    this.athlete = athletes.find(ath => ath.displayName === displayName);
  }

}
