import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { 
    console.log("product service");
    
  }

  getProductData(){
    return [
      {
        productName : "Iphone15Pro",
        price : "90000",
        brand : "Apple"
      },
      {
        productName : "MacBook Air",
        price : "150000",
        brand : "Apple"
      },
      {
        productName : "Iphone17Pro",
        price : "120000",
        brand : "Apple"
      }
    ]
  }
}
