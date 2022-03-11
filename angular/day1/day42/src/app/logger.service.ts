import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

logData(d:string){
  console.log(d)
}
logError(e:string){
  console.error(e)
}
  constructor() { }
}
