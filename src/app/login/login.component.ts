import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalstorageService } from '../services/localstorage.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  data: any;
  loginForm: FormGroup;
  constructor(private _lf: FormBuilder,private route:Router,private snackBar: MatSnackBar,
    private spinner: NgxSpinnerService,
     private _user: RegisterService, private localStorageService:LocalstorageService) {
    this.loginForm = this._lf.group({
      UserID: ['', [Validators.required,]],
      Password: ['', [Validators.required]],
    })
  }
  login() {
    this.spinner.show()
    const data = this.loginForm.value;
    console.log(data)
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched()


    } else {
      this._user.loginAdmin(data).subscribe((res: any) => {
        console.log(res)
        this.spinner.hide();
        if (res.status) {
        this.spinner.hide();

          this.localStorageService.saveData('user', res.data);

          this.route.navigateByUrl('/home')
           this.showAlert(res.message);
          // this.as.login(res.message)
        }else{
          this.showerro(res.message)
        this.spinner.hide();

        }
      })
    }
  }

  saveToLocalStorage() {
    this.localStorageService.saveData('myKey', { name: 'John', age: 30 });
  }
  showAlert(message:any) {
    Swal.fire({
      text: message,
      icon: 'success',
      timer:1500
    });
  }
  showerro(message:any) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message,
    });
  }
}

