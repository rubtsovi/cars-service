import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

@Component({
    selector: 'cs-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: [ './sidebar.component.scss' ]
})
export class SidebarComponent implements OnInit {

    @Output() addButtonClick: EventEmitter<void> = new EventEmitter<void>();
    private _carIcon: IconDefinition = faCar;

    constructor() {
    }

    ngOnInit() {
    }

    public addButtonClicked(): void {
        this.addButtonClick.emit();
    }

    get carIcon(): IconDefinition {
        return this._carIcon;
    }
}
