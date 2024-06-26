import { Component, DoCheck, EventEmitter, OnDestroy, Output, Renderer2 } from '@angular/core';
import { Ingredients } from '../shared/ingredient.modal';
import { shoppingListService } from '../shared/service/shoppingListService';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnDestroy{
  sub: any;
  listItemClicked: boolean=false;
  ingredients: Ingredients[];
  constructor(private spSvc: shoppingListService, private renderer: Renderer2){

  }


  ngOnInit(){
    this.ingredients = this.spSvc.ingredients
    this.sub = this.spSvc.ingredientCreated.subscribe((e) => {
      this.ingredients = e
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
  loadShoppingList(item){
    this.spSvc.ingredientEdit(item);
    
  }
}
