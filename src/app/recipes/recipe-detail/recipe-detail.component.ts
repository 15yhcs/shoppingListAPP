import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';
import { recipeListService } from '../../shared/service/recipeService';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  collapse: boolean = false;
  recipeCur: Recipe
  constructor(private svc:recipeListService){

  }
  ngOnInit(){
    this.svc.recipesSelected.subscribe(
      (recipt: Recipe) => (this.recipeCur = recipt
      
      ))
    console.log(this.recipeCur);
    
  }
  dpItems: String[] = ["Add ingrediant", "Edit ingrediant", "Delete ingrediant"];
}
