import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  imports: [FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  task = ""
  taskList : { id : Number , task : string}[] = []
  addTask(){
    this.taskList.push({id:this.taskList.length+1,task:this.task})
    this.task = ''
  }
  
  deleteTask(taskId:Number){
    console.log(taskId)
    this.taskList = this.taskList.filter((item)=>item.id != taskId)
  }
}
