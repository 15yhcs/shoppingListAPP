import { Injectable, EventEmitter} from "@angular/core";
import { Ingredients } from "../ingredient.modal";
@Injectable()
export class shoppingListService{
    ingredientCreated = new EventEmitter<Ingredients[]>();
    ingredients: Ingredients[]= [new Ingredients("sample", "2")];
    getIng(){
        return this.ingredients.slice()
    }
    addToIngreList(e){
        this.ingredients.push(new Ingredients(e.name, e.amount))
        this.ingredientCreated.emit(this.ingredients.slice())
    }

}