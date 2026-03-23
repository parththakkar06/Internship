import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../interfaces/Movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  // url = "http://localhost:3000/movies"

  constructor(private http:HttpClient) { }

  getMovies():Observable<Movies[]>{
    localStorage.setItem("token","12345TOKEN")
    return this.http.get<Movies[]>('/moies')
  }

  saveMovie(data:Movies):Observable<Movies>{
    return this.http.post<Movies>('/movies',data)
  }

  deleteMovie(id:string):Observable<Movies>{
    return this.http.delete<Movies>('/movies'+'/'+id)
  }

  selectedMovie(id:string):Observable<Movies>{
    return this.http.get<Movies>('/movies'+'/'+id)
  }

  updateMovie(data:Movies):Observable<Movies>{
    return this.http.put<Movies>('/movies'+"/"+data.id,data)
  }
}
