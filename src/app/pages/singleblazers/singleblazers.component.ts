import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-singleblazers',
  templateUrl: './singleblazers.component.html',
  styleUrls: ['./singleblazers.component.css']
})
export class SingleblazersComponent {
  singleblazers:any
  constructor(private blazers:HeroService){}
  ngOnInit():void{
    let pageId=localStorage.getItem('id');
    let singleblazersDataArray=this.blazers.getData4();
    
    this.singleblazers=singleblazersDataArray.filter(g =>g.name=== pageId )
    console.log(this.singleblazers);
}
}
