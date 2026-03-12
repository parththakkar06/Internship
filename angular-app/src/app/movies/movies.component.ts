import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

  constructor(private moviesService: MoviesService){

  }

  moviesList:any

  ngOnInit(){
    this.moviesService.getMovies().subscribe((data:any)=>{
      this.moviesList = data
      console.log(this.moviesList);
      
    })
  }
}
