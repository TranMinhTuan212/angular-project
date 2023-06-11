import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BackgroundComponent } from './components/background/background.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { WomenComponent } from './pages/women/women.component';
import { MenComponent } from './pages/men/men.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ChildrenComponent } from './pages/children/children.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AccountComponent } from './components/account/account.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import '@angular/localize/init';
<<<<<<< HEAD
import { MainItemComponent } from './components/main-item/main-item.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSPComponent } from './main-sp/main-sp.component';
=======
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { ButtonComponent } from './components/button/button.component';


>>>>>>> 44f6e685b5920a5a7756d187af872dba5fb1e162



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BackgroundComponent,
    MainComponent,
    FooterComponent,
    WomenComponent,
    MenComponent,
    ContactComponent,
    FormLoginComponent,
    FormRegisterComponent,
    HomeComponent,
    RegisterComponent,
    ChildrenComponent,
    LoginComponent,
    SearchComponent,
    SearchResultComponent,
    CategoriesComponent,
    AccountComponent,
<<<<<<< HEAD
    MainItemComponent,
    MainSPComponent,
    
=======
    CategoryDetailComponent,
    ButtonComponent,
>>>>>>> 44f6e685b5920a5a7756d187af872dba5fb1e162
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    NgbCollapseModule,
<<<<<<< HEAD
    CarouselModule
=======
>>>>>>> 44f6e685b5920a5a7756d187af872dba5fb1e162
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
