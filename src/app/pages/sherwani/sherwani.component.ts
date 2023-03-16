import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-sherwani',
  templateUrl: './sherwani.component.html',
  styleUrls: ['./sherwani.component.css']
})
export class SherwaniComponent {
  constructor(private hero:HeroService,private router:Router){}
  sherwani = this.hero.getData2()

  more(id:any){
    localStorage.setItem('id',id)
    this.router.navigate(['/singlesherwani'])
  }
}
