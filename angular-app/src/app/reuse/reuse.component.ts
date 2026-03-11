import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reuse',
  imports: [],
  templateUrl: './reuse.component.html',
  styleUrl: './reuse.component.css'
})
export class ReuseComponent {
  @Input() user:string = ''
}
