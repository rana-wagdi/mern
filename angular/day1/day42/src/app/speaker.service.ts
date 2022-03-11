import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
// import { builtinModules } from 'module';
import { Speaker } from './_models/speaker';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

//prive is no one can arrive too it only speakerserv can
  private spe:Speaker[]=[
    new Speaker(1,"Rana","https://irokonews.com/wp-content/uploads/2020/06/Capture-1-400x322.png","Haram","17-8-1997",12,false,"giza",false),
    new Speaker(2,"Rana","https://miro.medium.com/max/1200/1*lbRRHICAZjLkotvrMY7MLQ.png","Doki","18-8-1997",15,false,"giza",false),
    new Speaker(3,"Rana","https://irokonews.com/wp-content/uploads/2020/06/Capture-1-400x322.png","Haram","19-8-1997",16,false,"giza",false),
    new Speaker(4,"Rana","https://miro.medium.com/max/1200/1*lbRRHICAZjLkotvrMY7MLQ.png","Cairo","20-8-1997",17,false,"giza",false)
  
  ]
  
  getAllSpeakers(){
    this.ls.logData("data retrived");
    return this.spe
   
   
  }
  ESpe:Speaker = new Speaker(0,"","","","",0,false,"",false)
  
  getSpeakersById(_id:number):Speaker|null{
  
  for(let i = 0; i< this.spe.length;i++){
  if(this.spe[i]._id==_id)
    return new Speaker(_id,this.spe[i].name,this.spe[i].image,this.spe[i].address,this.spe[i].birthDate, this.spe[i].hourRate,this.spe[i].isMarried, this.spe[i].government,this.spe[i].edit)
  
  
  }
  
  return null;
  
  // constructor(_id:number,name:string, image:string, address:string, birthDate:string, hourRate:number, isMarried:boolean, government:string,edit:boolean){
  }
 
  addSpeaker(spek:Speaker){
    this.spe.push(new Speaker(spek._id,spek.name,spek.image,spek.address,spek.birthDate,spek.hourRate,spek.isMarried,spek.government,spek.edit))
    this.ls.logError("Speaker Add")
  }
  EditSpeaker(_id:number):Speaker|null{
  
    for(let i = 0; i< this.spe.length;i++){
      if(this.spe[i]._id==_id)
     
      this.spe.splice(i,1)
      
      
      }
      return null;
  }
  
  constructor(public ls:LoggerService) { }
  // constructor(_id:number){}
}
