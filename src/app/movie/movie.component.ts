import { Component, OnInit, Input } from '@angular/core';
import { TVChannel } from '../models/channel';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() channel:TVChannel;
  constructor() { }

  ngOnInit() {
  }

}
