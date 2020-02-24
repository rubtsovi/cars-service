import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[csModalHost]'
})
export class ModalHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
