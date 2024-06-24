import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../../recipes/recipe-list/recipe.model";
import { Ingredients } from "../ingredient.modal";
@Injectable()
export class recipeListService{
    recipesSelected = new EventEmitter<Recipe>();
    updateStatus = false;
    private receipes: Recipe[] = [
        new Recipe('Pizza', 'Buy a pizza and Microwave it', 
        '/assets/img/pizza.avif', 'two slice of baby oil', 
        0,
        new Ingredients('two slice of baby oil', '3'))
    ];

    getRecipes(){
        return this.receipes.slice();
    }

    pushRecipes(num: number){
        this.receipes.push(new Recipe(`Pizza ${num} `, `Buy a pizza and Microwave it`, '/assets/img/pizza.avif', 'baby oil', num, new Ingredients('two slice of baby oil', '3')));
    }

    pushRecipesWithContent(recipe: any){
        this.receipes.push(new Recipe(recipe.name.value, recipe.description.value, '/assets/img/pizza.avif', recipe.ingrediants.value, recipe.id, new Ingredients(recipe.ingrediantName.value, recipe.ingrediantAmount.value)));
    }

    updateRecipes(idx, recipe){
        this.receipes[idx] = new Recipe(
            recipe.name, 
            recipe.description,
            recipe.imagePath,
            recipe.ingrediants,
            recipe.id,
            new Ingredients(recipe.ingrediantsList.name, recipe.ingrediantsList.amount))
    }

    findRecipes(id): Recipe{
        const findItem = this.receipes.slice().find((item) => {
            console.log(item.id);
            
            return item.id === id
        })
        return findItem
    }
}