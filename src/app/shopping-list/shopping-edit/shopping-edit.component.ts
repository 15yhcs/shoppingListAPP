import { AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { Ingredients } from '../../shared/ingredient.modal';
import { shoppingListService } from '../../shared/service/shoppingListService';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @ViewChild('EditName', {static: false}) nameRef: ElementRef;
  // @ViewChild('EditAmount', {static: false}) amountRef: ElementRef;
  editShoppingForm : FormGroup;
  newIngredients: Ingredients;
  addButton: string="add";
  sub:any;
  @Input() inputVal: string = "";
  ctx = {
    labelName: 'name',
    labelAmount: 'amount',
    val: this.inputVal
  }
  constructor(private spSvc: shoppingListService, private renderer: Renderer2){
    
  }

  ngOnInit(){
    // console.log(this.nameRef);
    this.editShoppingForm = new FormGroup({
      'name': new FormControl(" ", [Validators.required, this.forbiddenName.bind(this)]),
      'amount': new FormControl(null, [Validators.required], this.forbiddenAmount.bind(this))
    })
  }

  ngAfterViewInit(){
    this.sub = this.spSvc.ingredientToBeEdited$.subscribe((item) => {
      console.log(item);
      this.editShoppingForm.setValue({
        "name": item.name,
        "amount": item.amount
      })
      this.addButton = "Edit"
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.inputVal);
    
  }

  change(e: any){
    this.inputVal = e.target.value;
    this.ctx.val = this.inputVal
    
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
    
    if(this.editShoppingForm.valid){
      if(this.spSvc.findIngredient(this.newIngredients.name) != -1){
        console.log("Shoud be here");
        
        this.spSvc.updateIngreList(this.newIngredients)
      }
      else{
        this.spSvc.addToIngreList(this.newIngredients)
      }
      this.addButton = "add"
    }
    this.editShoppingForm.reset();
  }

  forbiddenName(controls: FormControl){
    if(!controls.value){
      return {"ss": true};
    }
    return null;
  }

  forbiddenAmount(controls: FormControl){
    if(controls.value < 0){
      
      return of({"ss": true});
    }
    return of(null);
  }

  clearInputs(){
    this.editShoppingForm.reset();
    this.addButton = "add"
  }

  deleteItem(){
    if(this.spSvc.findIngredient(this.newIngredients.name) != -1){
      this.spSvc.deleteIngreList(this.newIngredients);
    }
    this.editShoppingForm.reset();
    this.addButton = "add"
  }

}
