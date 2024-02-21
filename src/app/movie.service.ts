import { Injectable } from '@angular/core';
import { Movies } from './movie.datasource';
import { Movie } from './movie';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private loggingService: LoggingService) {
    this.loggingService.add('MovieService: listing movies');
  }
  getMovies(): Observable<Movie[]> {
    return of(Movies);
  }
}
