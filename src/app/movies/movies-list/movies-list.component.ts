import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../movies.reducer';
import { FetchMovies, ChangePage, Pagination } from '../movies.actions';
import {
  getMovies,
  getIsLoading
} from '../../reducers/index';
import { Movie } from '../models/movie';

@Component({
  selector: 'swapi-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent implements OnInit {
  movies$: Observable<Movie[]> = this.store.pipe(select(getMovies));
  isFirst$: Observable<boolean>;
  isLast$: Observable<boolean>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.isLoading$ = this.store.select(getIsLoading);
    this.store.dispatch(new FetchMovies());
  }

  prev() {
    this.store.dispatch(new ChangePage(Pagination.PREV));
  }

  next() {
    this.store.dispatch(new ChangePage(Pagination.NEXT));
  }

  trackByUrl(index: number, hero: Movie): string {
    return hero.title;
  }
}
