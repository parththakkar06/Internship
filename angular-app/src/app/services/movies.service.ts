import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../interfaces/Movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getMovies():Observable<Movies[]>{
    const url = "http://localhost:3000/movies"
    return this.http.get<Movies[]>(url)
  }

  saveMovie(data:Movies):Observable<Movies>{
    const url = "http://localhost:3000/movies"
    return this.http.post<Movies>(url,data)
  }
}
