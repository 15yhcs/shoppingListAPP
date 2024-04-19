import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'
})
export class HeaderComponentComponent {
  listClicked: string;
  collapse: boolean = false;
  @Output('liClicked') clickedList = new EventEmitter<string>();
  dpItems: String[] = ["Action", "Action1", "Action2"]
  constructor(){

  }

  ngOnInit(){
    console.log(this.collapse);
    
  }

  clickItem(event){
    this.listClicked = event.target.innerHTML
    this.clickedList.emit(this.listClicked)
  }
}
