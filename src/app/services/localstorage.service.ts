import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  constructor() { }

  // Save data to local storage
  saveData(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Retrieve data from local storage
  getData(key: string): any {
    const data = localStorage.getItem(key);
    return JSON.parse(data!);
  }
  getUser(){
    if(JSON.parse(localStorage.getItem('user')!)){
      return true;

    }else{
      return false;

    }
    
  }
}