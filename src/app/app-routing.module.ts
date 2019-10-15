import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { from } from 'rxjs';
import { registerLocaleData } from '@angular/common';

const routes: Routes = [
  { path:"",redirectTo:"home",pathMatch:"full"},
  { path:"home",component:HomeComponent},
  { path:"login",component:LoginComponent},
  { path:"register",component:RegisterComponent},
  { path:"forgetpassword",component:ForgetPasswordComponent},
  { path:"newpassword",component:NewPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
