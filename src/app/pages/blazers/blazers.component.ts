import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-blazers',
  templateUrl: './blazers.component.html',
  styleUrls: ['./blazers.component.css']
})
export class BlazersComponent {
  constructor(private hero:HeroService,private router:Router){}
  blazers = this.hero.getData4()

  more(id:any){
    localStorage.setItem('id',id)
    this.router.navigate(['/singleblazers'])
  }
}
