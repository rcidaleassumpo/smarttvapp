import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { TVChannel } from '../models/channel';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  
  channels:TVChannel[] = [];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getChannels()
  }


  getChannels(){
    let channels = ['HBOPLUS', 'HBO','HBOFamily','Telecine']
    for(let channel of channels){
      this.movieService.filterBy('channel',channel)
      .subscribe((res:TVChannel) => this.channels.push(res))
    }
    
  }



  
}
