import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { CharactersListComponent } from './characters/characters-list/characters-list.component';
import { CharacterDetailsComponent } from './characters/character-details/character-details.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesListComponent

  },
  {
    path: 'movies/:movieId',
    component: MovieDetailComponent,
  },
  {
    path: 'mov',
    component: MovieDetailComponent,
  },
  
  {path: 'characters', component: CharactersListComponent},
  {path: 'characters/:characterId', component: CharacterDetailsComponent},
  {
    path: '**',
    redirectTo: '/movies',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
