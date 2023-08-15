import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from '../models/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'swapi-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent {
  @Input() movie: Movie;
  constructor(public MovieService: MovieService,
    private router: Router) { }

  openMoviesDetails(movie: Movie) {
    this.MovieService.selectedFilm = movie;
    this.router.navigate(['/movies', movie.id]);
  }
}
