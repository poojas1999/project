import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-sarees',
  templateUrl: './sarees.component.html',
  styleUrls: ['./sarees.component.css']
})
export class SareesComponent {
  constructor(private hero:HeroService,private router:Router){}
  sarees = this.hero.getData3()

  more(id:any){
    localStorage.setItem('id',id)
    this.router.navigate(['/single'])
  }
}
