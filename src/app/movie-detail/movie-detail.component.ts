import { MovieService } from './../movie.service';
import { Component, Input } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
})
export class MovieDetailComponent {
  //localhost:4200/detail/2
  @Input() movie: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit() {
    this.getMovie();
  }
  getMovie(): void {
    const idString: string | null = this.route.snapshot.paramMap.get('id');
    const id: number = idString !== null ? +idString : 0;
    this.movieService.getMovie(id).subscribe((movie) => (this.movie = movie));
  }
  save(): void {
    this.movieService.update(this.movie).subscribe(() => {
      this.location.back();
    });
  }
}
