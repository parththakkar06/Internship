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

  selectedMovie : Movies | undefined
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
    if(!this.selectedMovie){
      this.moviesService.saveMovie(data).subscribe(() => {
        if(data){
          this.getMovie()
        }
      })
    }else{
      const movieData = {...data,id:this.selectedMovie.id}
      this.moviesService.updateMovie(movieData).subscribe(()=>{
        if(data){
          this.getMovie()
          this.selectedMovie = undefined
        }
      })
    }
  }

  deleteMovie(id:string){
    return this.moviesService.deleteMovie(id).subscribe((data:Movies)=>{
      console.log(data);
      if(data){
        this.getMovie()
      }
    }) 
  }

  selectMovie(id:string){
    return this.moviesService.selectedMovie(id).subscribe((data:Movies)=>{
      console.log(data);
      this.selectedMovie = data
    })
  }
}
