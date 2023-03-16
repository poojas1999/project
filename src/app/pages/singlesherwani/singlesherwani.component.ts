import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-singlesherwani',
  templateUrl: './singlesherwani.component.html',
  styleUrls: ['./singlesherwani.component.css']
})
export class SinglesherwaniComponent {
  singlesherwani:any
  constructor(private sherwani:HeroService){}
  ngOnInit():void{
    let pageId=localStorage.getItem('id');
    let singlesherwaniDataArray=this.sherwani.getData2();
    
    this.singlesherwani=singlesherwaniDataArray.filter(f =>f.name=== pageId )
    console.log(this.singlesherwani);
}
}
