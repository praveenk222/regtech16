import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // constructor() {}

  // ngOnInit() {
  //   /** spinner starts on init */
  //   // this.spinner.show();

  //   // setTimeout(() => {
  //   //   /** spinner ends after 5 seconds */
  //   //   this.spinner.hide();
  //   // }, 5000);
  // }
  data: any;
  loginForm: FormGroup;
  constructor(private _lf: FormBuilder,private route:Router,private snackBar: MatSnackBar,
     private _user: RegisterService, ) {
    this.loginForm = this._lf.group({
      UserID: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      Password: ['', [Validators.required]],
    })
  }
  login() {
    const data = this.loginForm.value;
    console.log(data)
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched()


    } else {
      this._user.loginAdmin(data).subscribe((res: any) => {
        console.log(res)
        if (res.status) {

          this.route.navigateByUrl('/home')
          this.snackBar.open(res.message);
          // this.as.login(res.message)
        }
      })
    }
  }
}

