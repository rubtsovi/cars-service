import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material';
import { ShortNamePipe } from './pipes/short-name.pipe';
import { ImportantDirective } from './directives/important.directive';
import { ToggleBtnNamePipe } from './pipes/toggle-btn-name.pipe';

@NgModule({
    declarations: [ HeaderComponent, ShortNamePipe, ImportantDirective, ToggleBtnNamePipe ],
    imports: [
        CommonModule,
        MatToolbarModule
    ],
    exports: [ HeaderComponent, ShortNamePipe, ImportantDirective, ToggleBtnNamePipe ]
})
export class SharedModule {
}
