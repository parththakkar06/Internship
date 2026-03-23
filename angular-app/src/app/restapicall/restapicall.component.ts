import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restapicall',
  imports: [CommonModule],
  templateUrl: './restapicall.component.html',
  styleUrl: './restapicall.component.css'
})
export class RestapicallComponent {
  productList:any

  constructor(private productsService : ProductsService){

  }

  ngOnInit(){
    this.productsService.getProductList().subscribe((data:any)=>{
      console.log(data);
      this.productList = data.products
    })
  }
}
