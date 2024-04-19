import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../../recipes/recipe-list/recipe.model";
@Injectable()
export class recipeListService{
    recipesSelected = new EventEmitter<Recipe>();
    private receipes: Recipe[] = [
        new Recipe('Pizza', 'Buy a pizza and Microwave it', '/assets/img/pizza.avif', 'two slice of baby oil')
    ];

    getRecipes(){
        return this.receipes.slice();
    }
}