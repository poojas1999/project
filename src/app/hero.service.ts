import { Injectable } from '@angular/core';
import { bride } from 'src/assets/data/data';
import { gowns } from 'src/assets/data/data1';
import { sherwani } from 'src/assets/data/data2';
import { sarees } from 'src/assets/data/data3';
import { blazers } from 'src/assets/data/data4';
import { groom } from 'src/assets/data/data5';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
   
  getData()
  {
    return bride
  
  } 
  getData1()
  {
    return gowns
  
  } 
  getData2()
  {
    return sherwani
  
  } 
  getData3()
  {
    return sarees
  
  } 

  getData4()
  {
    return blazers
  
  } 
  getData5()
  {
    return groom
  }
  
}
