import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Comp1Component], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})  
export class AppComponent {
  title = 'klu1';
  x=1;
  test()
  {
    return this.x
  }
  path='assests/WhatsApp Image 2024-05-27 at 14.21.01_f4f93d54.jpg'
}

