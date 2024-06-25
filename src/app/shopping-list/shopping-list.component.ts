import { Component, DoCheck } from '@angular/core';
import { Ingredients } from '../shared/ingredient.modal';
import { shoppingListService } from '../shared/service/shoppingListService';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent{
  ingredients: Ingredients[];
  constructor(private spSvc: shoppingListService){

  }


  ngOnInit(){
    this.ingredients = this.spSvc.ingredients
    this.spSvc.ingredientCreated.subscribe((e) => {
      this.ingredients = e
    })
  }

  loadShoppingList(item){
    this.spSvc.ingredientEdit(item);
    
  }
}
