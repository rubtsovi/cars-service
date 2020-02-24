import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[csImportant]'
})
export class ImportantDirective {

    constructor( el: ElementRef ) {
        el.nativeElement.classList.add('font-weight-bold');
    }

}
