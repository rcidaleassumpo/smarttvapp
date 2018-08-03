import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './service/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieListComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
