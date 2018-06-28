import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'radio-strip',
  templateUrl: './radio-strip.component.html',
  styleUrls: ['./radio-strip.component.css']
})
export class RadioStripComponent implements OnInit {
  radioLabel = 'Communication';
  constructor() { }

  ngOnInit() {
  }

}
