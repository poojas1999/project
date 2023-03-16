import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { HeaderComponent } from './utils/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BrideComponent } from './pages/bride/bride.component';
import { GroomComponent } from './pages/groom/groom.component';
import { SingleComponent } from './pages/single/single.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { GownsComponent } from './pages/gowns/gowns.component';
import { SareesComponent } from './pages/sarees/sarees.component';
import { SherwaniComponent } from './pages/sherwani/sherwani.component';
import { BlazersComponent } from './pages/blazers/blazers.component';
import { RegisterComponent } from './pages/register/register.component';
import { SinglegownComponent } from './pages/singlegown/singlegown.component';
import { SinglesherwaniComponent } from './pages/singlesherwani/singlesherwani.component';
import { SingleblazersComponent } from './pages/singleblazers/singleblazers.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    LoginComponent,
    ContactComponent,
    SignupComponent,
    BrideComponent,
    GroomComponent,
    SingleComponent,
    CategoriesComponent,
    GownsComponent,
    SareesComponent,
    SherwaniComponent,
    BlazersComponent,
    RegisterComponent,
    SinglegownComponent,
    SinglesherwaniComponent,
    SingleblazersComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
