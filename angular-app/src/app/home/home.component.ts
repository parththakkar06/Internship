import { ɵnormalizeQueryParams } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  constructor(private router:Router){

  }
  goToProfile(name:string){
    this.router.navigate(['/profile'],{queryParams:{name}})
  }

  users = [
    {
      id : 1,
      name : 'alice',
      email : 'alice@test.com'
    },
    {
      id : 2,
      name : 'stephany',
      email : 'stephany@test.com'
    },
    {
      id : 3,
      name : 'emma',
      email : 'emma@test.com'
    },
    {
      id : 4,
      name : 'john',
      email : 'john@test.com'
    },
    {
      id : 5,
      name : 'harold',
      email : 'harold@test.com'
    }
  ]

}
