import { FavMoviesComponent } from './components/fav-movies/fav-movies.component';import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { MovieSearchComponent } from './components/movies/movie-search/movie-search.component';
import { MoviesComponent } from './components/movies/movies.component';

// adding router for HomeComponent and FavouriteMoviesComponent
const routes :Routes = [
  {path: '', redirectTo:'/movies',pathMatch:'full'},
  {path: 'home', component:MoviesComponent },
  {path: 'favourite', component:FavMoviesComponent },


];

// import RouterModule and route and routes

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[ RouterModule],
  declarations: []
})
export class AppRoutingModule { }
