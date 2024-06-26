import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appInputValueChange]'
})
export class InputValueChangeDirective implements OnChanges{
  @Input() categoryId: string;
  constructor(private elf: ElementRef) { 
    console.log(this.elf);
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.categoryId);
    
    
  }
}
