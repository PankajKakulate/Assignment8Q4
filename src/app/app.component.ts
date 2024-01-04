import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { getEventListeners } from 'node:events';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public dataTyped:string = "";
  public dataLength:number = 0;
  
  public AngularEvent(Value : any){
    this.dataTyped=""+Value;
   
    this.dataLength=this.dataTyped.length;

  }
}
