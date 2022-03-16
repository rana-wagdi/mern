import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponentComponent } from './new-component.component';

describe('NewComponentComponent', () => {
  let component: NewComponentComponent;
  let fixture: ComponentFixture<NewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('my property should be 10', () => {
    expect(component.myprop).toBe(10);
  }); 

  it("p should containes new-component work",()=>{
    let fix = fixture.nativeElement;
    expect(fix.querySelector("p").textContent).toBe("new-component works!")
  })
  it("h1 should containes title",()=>{
    let fix = fixture.nativeElement;
    expect(fix.querySelector("h1").textContent).toBe("title")
  })

   it("p with class Name iti",()=>{
    let fix = fixture.nativeElement;
    expect(fix.querySelector("p").classList).toContain("iti")
  })
  
  
  it("should x:2 ,y:2 = 4",()=>{
    expect(component.myfun(2,2)).toBe(4)
  })

});
