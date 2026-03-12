import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../interfaces/Movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url = "http://localhost:3000/movies"

  constructor(private http:HttpClient) { }

  getMovies():Observable<Movies[]>{
    return this.http.get<Movies[]>(this.url)
  }

  saveMovie(data:Movies):Observable<Movies>{
    return this.http.post<Movies>(this.url,data)
  }

  deleteMovie(id:string):Observable<Movies>{
    return this.http.delete<Movies>(this.url+'/'+id)
  }

  selectedMovie(id:string):Observable<Movies>{
    return this.http.get<Movies>(this.url+'/'+id)
  }

  updateMovie(data:Movies):Observable<Movies>{
    return this.http.put<Movies>(this.url+"/"+data.id,data)
  }
}
