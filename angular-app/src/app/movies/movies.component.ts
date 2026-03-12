import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movies } from '../interfaces/Movies';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

  constructor(private moviesService: MoviesService){

  }

  moviesList:Movies[] = []

  ngOnInit(){
    this.moviesService.getMovies().subscribe((data:Movies[])=>{
      this.moviesList = data
      console.log(this.moviesList);
      
    })
  }
}
