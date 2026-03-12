import { Component, NgModule } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movies } from '../interfaces/Movies';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies',
  imports: [FormsModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

  constructor(private moviesService: MoviesService) {

  }

  moviesList: Movies[] = []

  ngOnInit() {
    this.getMovie()
  }

  getMovie() {
    this.moviesService.getMovies().subscribe((data: Movies[]) => {
      this.moviesList = data
      console.log(this.moviesList);

    })

  }

  addMovie(data: Movies) {
    this.moviesService.saveMovie(data).subscribe(() => {
      if(data){
        this.getMovie()
      }
    })
  }
}
