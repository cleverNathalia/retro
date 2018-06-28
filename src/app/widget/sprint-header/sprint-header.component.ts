import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sprint-header',
  templateUrl: './sprint-header.component.html',
  styleUrls: ['./sprint-header.component.css']
})
export class SprintHeaderComponent implements OnInit {
  sprint = 'Sprint 1 - Growing those legs';
  
  constructor() { }

  ngOnInit() {
  }

}
