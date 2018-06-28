import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-team-feedback',
  templateUrl: './team-feedback.component.html',
  styleUrls: ['./team-feedback.component.css']
})
export class TeamFeedbackComponent implements OnInit {
  user;
  
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser(this.route.snapshot.paramMap.get('user')).subscribe(
      user => this.user = user
    );
  }

}
