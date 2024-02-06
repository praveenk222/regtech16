import { Component } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { LocalstorageService } from '../services/localstorage.service';

@Component({
  selector: 'app-home',
 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user: any;
  constructor(public nav:RegisterService,private localStorageService:LocalstorageService){
    this.nav.show()
  this.user= this.localStorageService.getData('user')
  }
}
