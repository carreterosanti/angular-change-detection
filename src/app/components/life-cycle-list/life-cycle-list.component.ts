import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-list',
  templateUrl: './life-cycle-list.component.html',
  styleUrls: ['./life-cycle-list.component.scss']
})
export class LifeCycleListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
