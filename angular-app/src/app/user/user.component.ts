import { Component, Input, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(private route : ActivatedRoute){
    console.log("Constructor CAlled")
  }

  name:null | string = ''
  @Input() counter=0

  ngOnInit(){
    console.log("ngOnInit Called")
    this.route.params.subscribe(params=>{
      console.log(params);
      this.name = params['name']    
    })
  }

  ngOnDestroy(){
    console.log("ngOnDestroy CAlled")
  }

  ngOnChanges(){
    console.log("ngOnChanges CAlled")
  }

  @Input() user:string = ''
  @Input() genre:string = ''

  pname = 'nerd'
  
}
