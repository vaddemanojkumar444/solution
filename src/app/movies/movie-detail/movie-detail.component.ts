import { Component, NgModule, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../movie.service';
import { select, Store } from '@ngrx/store';
import { State } from '../movies.reducer';
import { Observable } from 'rxjs';
import { getMovie, getMovieCharacters } from '../../reducers';
import { map } from 'rxjs/operators';
import { FetchMovie, FetchMovieCharacters } from '../movies.actions';
import { Character } from '../../characters/models/character';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  film$: Observable<Movie> = this.store.pipe(select(getMovie));
  characters$: Observable<Character[]> = this.store.pipe(select(getMovieCharacters));
  constructor(public movieService: MovieService,
    private store: Store<State>,
    private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(new FetchMovie());
    this.store.dispatch(new FetchMovieCharacters());
    this.characters$.forEach(element => {
    });
  }
  openCharacterDetail(character: Character) {
    console.log("character:", character);
    this.movieService.selectedCharacter = character;
    this.router.navigate(['/characters/', character.id]);
  }

}
