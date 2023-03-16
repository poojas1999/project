import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-bride',
  templateUrl: './bride.component.html',
  styleUrls: ['./bride.component.css']
})
export class BrideComponent {

  constructor(private hero:HeroService,private router:Router){}
  bride = this.hero.getData()

  more(id:any){
    localStorage.setItem('id',id)
    this.router.navigate(['/single'])
  }
}
