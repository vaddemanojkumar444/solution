import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, of } from 'rxjs';

import { Movie, MoviesResponse } from './models/movie';
import { finalize, map, tap } from 'rxjs/operators';
import { LoaderService } from '../loader/loader.service';
import { Character } from '../characters/models/character';


const FILM_HTTP_URL_LENGTH = `'https://swapi.dev/api/films/`.length;

@Injectable()
export class MovieService {
  private readonly baseUrl = 'https://swapi.dev/api';

  filmsList: Movie[];
  selectedFilm: Movie;
  selectedCharacter: Character;

  constructor(private http: HttpClient,private loaderService: LoaderService) {}

  getMovies(): Observable<Movie[]>{
    const options = {
      params: {}
    };
    if (this.filmsList) {
      return of(this.filmsList);
    } else {
      return this.http.get<MoviesResponse>(`${this.baseUrl}/films`,options)
        .pipe(map((films => films.results.map(film => {
              film.id = this.getFilmId(film.url);
              return film;
            })
          )),
          tap(films => this.filmsList = films),
          finalize(() => this.loaderService.finishLoading()));
    }
  }
 
  getFilmsByCharacter(character: Character) {
    
    return forkJoin(character.films.map(filmUrl => {
        this.loaderService.startLoading();
        return this.http.get<Movie>(filmUrl)
          .pipe(map(film => {
            film.id = this.getFilmId(film.url);
            
            return film;
          }), finalize(() => this.loaderService.finishLoading()));
      }
    ));
  }

  getFilm(movieId: number): Observable<Movie> {
    this.loaderService.startLoading();
    
    return this.http.get<Movie>(`${this.baseUrl}/films/${movieId}`)
      .pipe(map(film => {
        
        film.id = this.getFilmId(film.url);
        return film;
      }), finalize(() => this.loaderService.finishLoading()));
  }

  private getFilmId(filmUrl: string): number {
    return parseInt(filmUrl.substring(FILM_HTTP_URL_LENGTH, filmUrl.length - 2), 10);
  }
}
