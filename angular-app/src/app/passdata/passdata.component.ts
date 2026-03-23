import { Component } from '@angular/core';
import { ReuseComponent } from '../reuse/reuse.component';

@Component({
  selector: 'app-passdata',
  imports: [ReuseComponent],
  templateUrl: './passdata.component.html',
  styleUrl: './passdata.component.css'
})
export class PassdataComponent {

  // users = ['alice', 'mia' , 'emma' , 'kally' , 'sofi']

  users:undefined|string[]

  handleUsers(users:string[]){
    console.log(users)
    this.users = users
  }
}
