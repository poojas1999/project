import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-singlegown',
  templateUrl: './singlegown.component.html',
  styleUrls: ['./singlegown.component.css']
})
export class SinglegownComponent {
  singlegown:any
  constructor(private gowns:HeroService){}
  ngOnInit():void{
    let pageId=localStorage.getItem('id');
    let singlegownDataArray=this.gowns.getData1();
    
    this.singlegown=singlegownDataArray.filter(e =>e.name=== pageId )
    console.log(this.singlegown);
}
}
