import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomenComponent } from './pages/women/women.component';
import { MenComponent } from './pages/men/men.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ChildrenComponent } from './pages/children/children.component';

const routes: Routes = [
  {path: 'women', component: HomeComponent},
  {path: '', component: MenComponent},
  {path: 'women', component: WomenComponent},
  {path: 'children', component: ChildrenComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
