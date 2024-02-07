import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard  } from './services/auth.guard';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  // {path:'home',component:HomeComponent,canActivate: [AuthGuard ]}
  {path:'home',component:HomeComponent},
  {path:'',component:LandingpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
