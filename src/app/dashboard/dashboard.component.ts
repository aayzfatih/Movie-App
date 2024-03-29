import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  movies: Movie[] = [];
  movieLength: number;
  constructor(private moviesService: MovieService) {}
  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.moviesService.getMovies().subscribe((movies) => {
      this.movies = movies.slice(0, 5);
      this.movieLength = movies.length;
    });
  }
}
