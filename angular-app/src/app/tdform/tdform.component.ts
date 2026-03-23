import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  imports: [FormsModule,NgIf],
  templateUrl: './tdform.component.html',
  styleUrl: './tdform.component.css'
})
export class TdformComponent {
  
  userDetails:any
  addDetails(val:NgForm){
    console.log(val);
    this.userDetails=val
  }
}
