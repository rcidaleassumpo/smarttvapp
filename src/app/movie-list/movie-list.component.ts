import { Component, OnInit, Input } from '@angular/core';
import { TVChannel } from '../models/channel';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  
  @Input() receiveDataFromParent:TVChannel[]
  constructor() { }
  
  ngOnInit() {
        
  }

  
  



  
}
