import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-groom',
  templateUrl: './groom.component.html',
  styleUrls: ['./groom.component.css']
})
export class GroomComponent {
  constructor(private hero:HeroService,private router:Router){}
  groom = this.hero.getData5()

  more(id:any){
    localStorage.setItem('id',id)
    this.router.navigate(['/groom'])
}
}
