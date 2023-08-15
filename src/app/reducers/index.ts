import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromMovies from '../movies/movies.reducer';

export interface State {
  movies: fromMovies.State;
}

export const reducers: ActionReducerMap<State> = {
  movies: fromMovies.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
export const getMoviesState = createFeatureSelector<fromMovies.State>('movies');
export const getMovies = createSelector(getMoviesState, state => state.data);
export const getIsLoading = createSelector(getMoviesState, state => state.isLoading);
export const getMovieCharacters = createSelector(getMoviesState, state => state.selectedMovieCharacters);
export const getMovie = createSelector(getMoviesState, state => state.selectedMovie);
export const getCharacterMovies = createSelector(getMoviesState, state => state.selectedCharacterMovies);
export const getCharacter = createSelector(getMoviesState, state => state.selectedCharacter);
