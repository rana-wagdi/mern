import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Speaker } from './_models/speaker';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
baseurl:string="http://localhost:3000/student/"
    getAllSpeaker(){
   return this.http.get<Speaker[]>(this.baseurl)
    }

    getSpeakerById(id:number){
      return this.http.get<Speaker>(this.baseurl+id)
    }
    addSpeaker(spe:Speaker){
      return this.http.post<Speaker>(this.baseurl,spe)
    }
    updateSpeaker(spe:Speaker){
       return this.http.put<Speaker>(this.baseurl+spe._id,spe)
    }
    DeleteSpeaker(id:number){
      return this.http.delete<Speaker>(this.baseurl+id)
   }
  constructor(public http:HttpClient) { }
}
