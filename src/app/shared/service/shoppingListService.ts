import { Injectable, EventEmitter} from "@angular/core";
import { Ingredients } from "../ingredient.modal";
import { BehaviorSubject, Subject } from "rxjs";
@Injectable()
export class shoppingListService{
    ingredientToBeEdited$ = new Subject<Ingredients>();
    ingredientCreated = new EventEmitter<Ingredients[]>();
    ingredients: Ingredients[]= [new Ingredients("sample", 2)];
    getIng(){
        return this.ingredients.slice()
    }
    addToIngreList(e){
        console.log(e);
        
        this.ingredients.push(new Ingredients(e.name, e.amount))
        this.ingredientCreated.emit(this.ingredients.slice())
    }

    ingredientEdit(item){
        this.ingredientToBeEdited$.next(item);
    }

}