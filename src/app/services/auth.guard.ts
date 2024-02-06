import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { LocalstorageService } from './localstorage.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private router: Router,private localStorageService:LocalstorageService) {}

  canActivate(): boolean {
    let isactive:boolean=false
     let data=this.localStorageService.getData('user')
     console.log(data)
    //  if(data){
    //   thi

    //  }
    
    if (data?.IsActive) {
      return true; // Allow access to the route
    } else {
      this.router.navigate(['/']); // Redirect to the login page
      return false; // Block access to the route
    }
  }

// export const authGuard: CanActivate {

  
//   constructor(private localStorageService:LocalstorageService) {
//    console.log( localStorage.getItem('user'))
//   }
//   return true;


// };
}