import { Component } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { recipeListService } from '../shared/service/recipeService';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  curRecipt: Recipe;
  selected: boolean = false;

  unloadDetails(e){
    // this.curRecipt = e;
    this.selected = true;
    console.log(this.selected);
    
  }
}
