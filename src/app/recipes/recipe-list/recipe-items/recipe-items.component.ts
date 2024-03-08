import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrl: './recipe-items.component.css'
})
export class RecipeItemsComponent {
  @Input() receipeChild:Recipe;
  @Output() item = new EventEmitter<{Description: string, Ingre: string}>() 
  
  sendItemDetails(){
    // console.log(this.receipeChild.description + '   ' + this.receipeChild.ingrediants);
    this.item.emit({Description: this.receipeChild.description, Ingre: this.receipeChild.ingrediants})
  }
}
