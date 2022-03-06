import { Component, OnInit } from '@angular/core';
import { Speakers } from '../-modules/speakers';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {
valid =true
  
  speaker:Speakers={"_id":1,"name":"Rana","image":"https://irokonews.com/wp-content/uploads/2020/06/Capture-1-400x322.png","address":"haram","birthDate":"18-12-1997","hourRate":25,"isMarried":false,"government":"Giza","edit":false}
spe:Speakers[]=[
 
  {"_id":1,"name":"Rana","image":"https://irokonews.com/wp-content/uploads/2020/06/Capture-1-400x322.png","address":"haram","birthDate":"18-12-1997","hourRate":25,"isMarried":false,"government":"Giza","edit":false},
  {"_id":2,"name":"Ahmed","image":"https://upload.wikimedia.org/wikipedia/commons/0/0f/Facebook_custom_avatar.png","address":"Faisal","birthDate":"18-12-1997","hourRate":25,"isMarried":false,"government":"Giza","edit":false},
  {"_id":3,"name":"Karim","image":"https://irokonews.com/wp-content/uploads/2020/06/Capture-3-400x289.png","address":"haram","birthDate":"18-12-1997","hourRate":25,"isMarried":false,"government":"Giza","edit":false},
  {"_id":4,"name":"Mohamed","image":"https://miro.medium.com/max/1200/1*lbRRHICAZjLkotvrMY7MLQ.png","address":"haram","birthDate":"18-12-1997","hourRate":25,"isMarried":false,"government":"Giza","edit":false}


]

delete(n:number){
  if(confirm("are you sure")){
  for (let i = 0; i < this.spe.length; i++) {
    if(this.spe[i]._id==n)  
    {
      this.spe.splice(i,1);
      return;
    }    
  }
}
}
update(n:number){
  
  for (let i = 0; i < this.spe.length; i++) {
    if(this.spe[i]._id==n)  
    {
      this.valid= false
      return;
    }    
  }
}

hidden = false;
imageSource(){
  this.hidden = !this.hidden;
}

save(){
  this.spe.push({_id:this.speaker._id,name:this.speaker.name,image:this.speaker.image,address:this.speaker.address,birthDate:this.speaker.birthDate,hourRate:this.speaker.hourRate,isMarried:this.speaker.isMarried, government:this.speaker.government,edit:this.speaker.edit});
}



// showImg(n:string){
  
//   for (let i = 0; i < this.spe.length; i++) {
//     if(this.spe[i].image==n)  
//     {
//       this.spe.splice(i,1);
//       return;
//     }    
//   }

// }

// updateItem(item:any){
  
//   let index = this.spe.indexOf(item);
//   item.name = "";
//   this.spe[index] = item;

//   console.log(this.spe);
// }


// spe.ForEach(item =>{
//   if(item.id == newitem.id){
//       item.name = newitem.name
//   }
// });
updateItem(newItem:any){
  for (let i = 0; i < this.spe.length; i++) {
      if(this.spe[i]._id == newItem._id){
        this.spe[i] = newItem;
      }
    }
}




  constructor() { }

  ngOnInit(): void {
  }

}
