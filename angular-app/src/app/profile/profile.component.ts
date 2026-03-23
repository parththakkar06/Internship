import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyConvertorPipe } from '../pipe/currency-convertor.pipe';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, CurrencyConvertorPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private route : ActivatedRoute, private productService : ProductService){

  }

  userName:string | null = ''
  ngOnInit():void{
    // this.userName = this.route.snapshot.paramMap.get('name')  
    // this.route.queryParams.subscribe(params=>{
    //   console.log(params);
    //   this.userName = params['name']
    // })    
    this.route.data.subscribe(data=>{
    this.userName = data['name'];
      
    })
  }

  title = 'About Lose'
  date = new Date()
  amount = 10
  
  productData : {
    productName : string , 
    price : string , 
    brand : string
  }[] | undefined

  getProductData(){
    this.productData = this.productService.getProductData()
    console.log(this.productData)
  }
}
