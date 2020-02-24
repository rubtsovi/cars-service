import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toggleBtnName'
})
export class ToggleBtnNamePipe implements PipeTransform {

    transform( value: boolean, isTrueName: string, isFalseName: string ): string {

        if (!value) {
            return isFalseName;
        }

        return isTrueName;
    }

}
