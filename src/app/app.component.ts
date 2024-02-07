import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'regtech';
  showheader:boolean=false;
  constructor(private router:Router) {
    router.events.subscribe((val)=>{
      if(val instanceof NavigationEnd){
        if(val.url == '/' ){
          this.showheader=true
        }else{
          // this.showheader=false;
        }
      }
    })
  }

 
}
