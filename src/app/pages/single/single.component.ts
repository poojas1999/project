import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  single:any
  constructor(private bride:HeroService){}
  ngOnInit():void{
    let pageId=localStorage.getItem('id');
    let singleDataArray=this.bride.getData();
    
    this.single=singleDataArray.filter(d =>d.name=== pageId )
    console.log(this.single);
}


}
