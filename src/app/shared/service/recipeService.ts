import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../../recipes/recipe-list/recipe.model";
import { Ingredients } from "../ingredient.modal";
@Injectable()
export class recipeListService{
    recipesSelected = new EventEmitter<Recipe>();
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

    findRecipes(id): Recipe{
        const findItem = this.receipes.slice().find((item) => {
            console.log("find",item.id);
            
            return item.id === id
        })

        console.log("findItem", findItem);
        
        return findItem
    }
}