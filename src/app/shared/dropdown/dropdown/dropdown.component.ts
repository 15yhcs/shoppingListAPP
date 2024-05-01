import { Component, DoCheck, Input, OnInit, TemplateRef } from '@angular/core';
import { shoppingListService } from '../../service/shoppingListService';
import { RecipeDetailComponent } from '../../../recipes/recipe-detail/recipe-detail.component';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent implements DoCheck{
  @Input() dropDownItem: String[];
  @Input("pInput") parent: RecipeDetailComponent;
  constructor(private spSvc: shoppingListService){
    
  }

  ngDoCheck(){
    console.log("PrentItem", this.parent);
    
  }

  clickActions(item){
    console.log(item);
    
    if(item === "Add ingrediant"){
      this.spSvc.addToIngreList({name: this.parent.recipeCur.ingrediantsList.name, amount: 3})
      
    }
  }
}
