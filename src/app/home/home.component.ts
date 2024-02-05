import { Component } from '@angular/core';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-home',
 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public nav:RegisterService){
    this.nav.show()
  }
}
