import { Injectable } from '@angular/core';
import * as tvprograms from "../movie-list/tvprograms.json";
import { TVProgram } from '../models/tvprogram';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  filteredItems: TVProgram[] = [];
  constructor() { }
  getMovies(key: string){
    let i = 0
    do {
      if(tvprograms[i][key] === 'movie'){
        this.filteredItems.push(tvprograms[i])
      }
      i += 1
    } while ( i < tvprograms.length )
    return this.filteredItems
  }
}
