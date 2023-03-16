import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-gowns',
  templateUrl: './gowns.component.html',
  styleUrls: ['./gowns.component.css']
})
export class GownsComponent {
  constructor(private hero:HeroService,private router:Router){}
  gowns = this.hero.getData1()

  more(id:any){
    localStorage.setItem('id',id)
    this.router.navigate(['/singlegown'])
  }
}
