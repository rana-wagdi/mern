export class Speakers {
    
    _id:number= 0;
    name:string ="";
    image:string="";
    address:string="";
    birthDate:string="";
    hourRate:number=0;
    isMarried:boolean=true;
    government:string=""
    edit:boolean=false
    
    
    constructor(_id:number,name:string, image:string, address:string, birthDate:string, hourRate:string, isMarried:boolean, government:string,edit:boolean){
    this._id,
    this.name=name,
    this.image=image,
    this.address=address,
    this.birthDate=birthDate,
    this.hourRate,
    this.isMarried=isMarried,
    this.government=government,
    this.edit=edit
    
    }
    




}