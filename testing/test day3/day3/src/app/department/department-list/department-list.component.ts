import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/_modules/department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

depts:Department[]=[
  new Department( 5,"https://miro.medium.com/max/1200/1*lbRRHICAZjLkotvrMY7MLQ.png","Leaf-Rake", "gdn 001","March 19,,2021",15, 4),
  new Department( 4,"https://miro.medium.com/max/1200/1*lbRRHICAZjLkotvrMY7MLQ.png","Garden-Cart", "gdn 023","March 19,,2021",74, 5),
  new Department( 3,"https://miro.medium.com/max/1200/1*lbRRHICAZjLkotvrMY7MLQ.png","Hammer", "tbx 0048", "March 19,,2021",41,2),
  new Department( 2,"https://miro.medium.com/max/1200/1*lbRRHICAZjLkotvrMY7MLQ.png","Saw", "tbx 0022", "March 19,,2021",12,4),
  new Department( 1,"https://miro.medium.com/max/1200/1*lbRRHICAZjLkotvrMY7MLQ.png","Video-Game-Controller", "gmg", "March 19,,2021",8,4)
  
  
  
]

Edept:Department = new Department(0,"",'','',"",0,0);

showdEdit(a:Department){
  this.Edept= new Department(a._id,a.image,a.name,a.location,a.date,a.price,a.rating)
}

hidden = false;
imageSource(){
  this.hidden = !this.hidden;
}
searchTerm:string=""

deptDetails:Department=this.depts[0];
  constructor() { }
  
  saveDepartment(d: Department){
    this.depts.push(d);
  }


 
  
  showDetailes(n:Department){
    this.deptDetails=n
  }
  depEdit:Department=this.depts[0];
  showEdit(n:number){

  
      for (let i = 0; i < this.depts.length; i++) {
        if(this.depts[i]._id==n) 
        {
       this.depts.splice(i,1)
      this.depts.push(this.Edept)
          
          return;
        }   
      }
    
  }

  ngOnInit(): void {
  }

}
