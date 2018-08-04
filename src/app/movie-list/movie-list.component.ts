import { Component, OnInit, Output, Input, SimpleChanges } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { TVChannel } from '../models/channel';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() todayDate:number;

  ngOnChanges(changes: SimpleChanges) {

    this.channels = []
    this.getChannels(changes.todayDate.currentValue);

  }

  channels:TVChannel[] = [];
  
  constructor(private movieService: MovieService) { }
  
  ngOnInit() {
    
  }

  
  getChannels(day){
    let channels = ['HBOPLUS', 'HBO','HBOFamily','Telecine']
    for(let channel of channels){
      this.movieService.filterBy('channel',channel,day)
      .subscribe((res:TVChannel) => this.channels.push(res))
    }
  }



  
}
