import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { TVChannel } from '../models/channel';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  
  channels:TVChannel;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getChannels()
  }


  getChannels(){
    this.movieService.filterBy('channel','HBO')
      .subscribe(res => this.channels = res)
  }



  
}
