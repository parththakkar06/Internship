import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private route : ActivatedRoute){

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
}
