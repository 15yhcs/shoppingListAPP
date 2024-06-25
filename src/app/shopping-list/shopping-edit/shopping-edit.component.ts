import { AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Ingredients } from '../../shared/ingredient.modal';
import { shoppingListService } from '../../shared/service/shoppingListService';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, AfterViewInit {
  @ViewChild('EditName', {static: false}) nameRef: ElementRef;
  // @ViewChild('EditAmount', {static: false}) amountRef: ElementRef;
  editShoppingForm : FormGroup;
  newIngredients: Ingredients;
  ctx = {
    labelName: 'name',
    labelAmount: 'amount'
  }
  constructor(private spSvc: shoppingListService, private renderer: Renderer2){
    
  }

  ngOnInit(){
    // console.log(this.nameRef);
    this.editShoppingForm = new FormGroup({
      'name': new FormControl("", [Validators.required, this.forbiddenName.bind(this)]),
      'amount': new FormControl("", [Validators.required], this.forbiddenAmount.bind(this))
    })
  }

  ngAfterViewInit(){
    this.spSvc.ingredientToBeEdited$.subscribe((item) => {
      console.log(item);
      this.editShoppingForm.setValue({
        "name": item.name,
        "amount": item.amount
      })
    })
  }

  ngDoCheck(): void {
    
    
  }

  // formNewItem(){
  //   this.spSvc.addToIngreList(new Ingredients(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value))
  // }

  onSubmit(){
    // this.spSvc.addToIngreList(new Ingredients(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value))
    this.newIngredients = new Ingredients(
      (<FormGroup>this.editShoppingForm).get('name').value,
      (<FormGroup>this.editShoppingForm).get('amount').value,
    )
    
    if(this.editShoppingForm.get("name").status !== "INVALID"){
      this.spSvc.addToIngreList(this.newIngredients)
    }
    console.log(this.editShoppingForm.get("name").status);
    
  }

  forbiddenName(controls: FormControl){
    if(controls.value.length > 5){
      return {"ss": true};
    }
    return null;
  }

  forbiddenAmount(controls: FormControl){
    if(controls.value > 5){
      return of({"ss": true});
    }
    return of(null);
  }

}
