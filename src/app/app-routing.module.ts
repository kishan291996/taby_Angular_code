import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { TemplateDrivenLoginComponent } from './component/aero/template-driven-login/template-driven-login.component';
import { RegistrationComponent } from './component/aero/registration/registration.component';

const routes: Routes = [
  {path:"", component:TemplateDrivenLoginComponent},
  {path:"templog", component:TemplateDrivenLoginComponent},
  {path:"reg", component:RegistrationComponent},
  {path:"login", component:LoginComponent},
  {path: "register", component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
