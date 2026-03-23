import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reuse',
  imports: [],
  templateUrl: './reuse.component.html',
  styleUrl: './reuse.component.css'
})
export class ReuseComponent {
  // @Input() user:string = ''

  users = ['alice', 'mia' , 'emma' , 'kally' , 'sofi']

  @Output() getUsers= new EventEmitter()

  loadData(){
    this.getUsers.emit(this.users)
  }
}
