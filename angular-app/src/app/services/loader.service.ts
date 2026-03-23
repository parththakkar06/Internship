import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  loading = false

  show(){
    this.loading = true
    console.log("Loader ON");
  }

  hide(){
    this.loading = false
    console.log("Loader OFF")
  }
}
