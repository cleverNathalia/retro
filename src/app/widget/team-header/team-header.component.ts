import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'team-header',
  templateUrl: './team-header.component.html',
  styleUrls: ['./team-header.component.css']
})
export class TeamHeaderComponent implements OnInit {
  team = 'Team aces over Spades';
  
  constructor() { }

  ngOnInit() {
  }

}
