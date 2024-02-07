import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';
import { RegisterService } from '../services/register.service';
import { LocalstorageService } from '../services/localstorage.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  user: any=null;
  isHome:boolean=false;
    constructor(public nav:RegisterService,private router:Router,public ls:LocalstorageService){
      this.nav.show()
     
      router.events.subscribe((val)=>{
        if(val instanceof NavigationEnd){
          if(val.url == '/home' ){
            this.isHome=true
          }else{
            // this.showheader=false;
          }
        }
      })
    }
    
  
    
    logout(){
      localStorage.clear();
      this.router.navigateByUrl('')

    }
}
