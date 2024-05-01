import { Directive, Input, TemplateRef, ViewContainerRef, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropownDirective {
    @Input() set appDropdown(value: boolean){
        if(value){
            this.vcRef.createEmbeddedView(this.temp);
        }else{
            this.vcRef.clear()
        }
    }
    constructor(private temp: TemplateRef<any>, private vcRef:ViewContainerRef) { 
        console.log(temp);
        console.log(vcRef);


    }
}