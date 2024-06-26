import { Injectable, EventEmitter} from "@angular/core";
import { Ingredients } from "../ingredient.modal";
import { BehaviorSubject, Subject } from "rxjs";
@Injectable()
export class shoppingListService{
    ingredientToBeEdited$ = new Subject<Ingredients>();
    ingredientCreated = new Subject<Ingredients[]>();
    ingredients: Ingredients[]= [new Ingredients("sample", 2)];
    getIng(){
        return this.ingredients.slice()
    }
    addToIngreList(e){
        console.log(e);
        
        this.ingredients.push(new Ingredients(e.name, e.amount))
        this.ingredientCreated.next(this.ingredients.slice())
    }

    updateIngreList(e: Ingredients){
        console.log(e);
        
        this.ingredients.forEach((item,index) => {
            if(item.name === e.name){
                this.ingredients[index] = e;
            } 
        })
        this.ingredientCreated.next(this.ingredients.slice())
    }

    deleteIngreList(e: Ingredients){
        console.log(e);
        
        const filteredArr = this.ingredients.filter(item => item.name !== e.name)
        console.log(filteredArr);
        
        this.ingredientCreated.next(filteredArr)
    }

    ingredientEdit(item){
        this.ingredientToBeEdited$.next(item);
    }

    findIngredient(item: string){
        const idx = this.getIng().findIndex((ing) => {
            return item === ing.name
        })
        console.log(idx);
        
        return idx
    }

}