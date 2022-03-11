import { Injectable } from '@angular/core';
import {interval, Observable, observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TryobservableService {

 myFun(){
 
      return interval(1000).pipe(
      map(a=>Math.pow(a,2)),
      filter(a=> a<10)
      
      
      )
      //   setTimeout(()=>{
        
      //        a.next(10)
        
      //   },1000)
        
      //   setTimeout(()=>{
      //     a.next(20);
      //   },1500)
        
        
        
      //   setTimeout(()=>{
      //     a.next(30);
      //   },3000)
      
      // })
 
 }

  constructor() { }
}
