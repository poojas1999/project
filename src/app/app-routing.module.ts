import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { groupBy } from 'rxjs';
import { AboutComponent } from './pages/about/about.component';
import { BlazersComponent } from './pages/blazers/blazers.component';
import { BrideComponent } from './pages/bride/bride.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GownsComponent } from './pages/gowns/gowns.component';
import { GroomComponent } from './pages/groom/groom.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SareesComponent } from './pages/sarees/sarees.component';
import { SherwaniComponent } from './pages/sherwani/sherwani.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingleComponent } from './pages/single/single.component';
import { SingleblazersComponent } from './pages/singleblazers/singleblazers.component';
import { SinglegownComponent } from './pages/singlegown/singlegown.component';
import { SinglesherwaniComponent } from './pages/singlesherwani/singlesherwani.component';


const routes: Routes = [
  {
    path:'home',component:HomeComponent
    },
    {
      path:'about',component:AboutComponent
      },
      {
        path:'login',component:LoginComponent
        },
        {
          path:'contact',component:ContactComponent
          },
          {
            path:'signin',component:SignupComponent
            }, 
            {
              path:'bride',component:BrideComponent
              }, 
              
              {
                path:'groom',component:GroomComponent
                },
                {
                  path:'categories',component:CategoriesComponent
                  }, 
                  {
                    path:'single',component:SingleComponent
                   },
                   {
                    path:'gowns',component:GownsComponent
                   },
                   {
                    path:'sherwani',component:SherwaniComponent
                   },
                   {
                    path:'sarees',component:SareesComponent
                   
                    },
                    {
                      path:'blazers',component:BlazersComponent
                     },

                     {
                      path:'register',component:RegisterComponent
                     },
                     
                     {
                      path:'singlegown',component:SinglegownComponent
                     },
                     {
                      path:'singlesherwani',component:SinglesherwaniComponent
                     },
                     {
                      path:'singleblazers',component:SingleblazersComponent
                     },

                
                
              
          

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
