import { Component } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { LocalstorageService } from '../services/localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user: any;
  constructor(public nav:RegisterService,private localStorageService:LocalstorageService,public ls:LocalstorageService,private router:Router){
    this.nav.show()
  this.user= this.localStorageService.getData('user')

  this.nav.show()
  this.user= this.ls.getData('user')
  if(this.user){

    // alert(this.user.IsActive)
  }
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('')

  }
}
