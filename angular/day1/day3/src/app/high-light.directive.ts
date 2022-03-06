import { Directive, ElementRef, OnChanges, Input, OnInit, SimpleChange } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit{
  @Input('appHighLight') dcolor ="red"
  constructor(private elm:ElementRef) {

  
  }
  
  ngOnChanges(changes: SimpleChange):void{
  
    this.elm.nativeElement.style.color=this.dcolor
  }
  ngOnInit(): void {
    // this.elm.nativeElement.style.backgroundColor=this.dcolor
  }
  

}
