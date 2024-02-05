import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})

export class RegisterService {

 api_key:string=`4d7853a2-965f-11ee-8cbb-0200cd936042`;
visibility=true;
hide(){
  this.visibility=false;
}
show(){
  this.visibility=false;
}
baseUrl:any=environment.apiurl;
  constructor(private http:HttpClient) {
    this.visibility=false;
   }
  loginAdmin(data:any):Observable<any>{
    return this.http.post(this.baseUrl + `customers/adminLogin`, data);
    }

  
}

