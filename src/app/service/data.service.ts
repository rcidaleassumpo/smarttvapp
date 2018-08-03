import { Injectable, Injector } from '@angular/core';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _movieService: MovieService;
  public get movieService(){
    if(!this._movieService){
      this._movieService = this.injector.get(MovieService);
    }
    return this._movieService;
  }
  constructor(private injector: Injector) { 
    
  }
  
  getMovies(){
    this.movieService
  }  

}
