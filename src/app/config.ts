import { InjectionToken } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

export const API_URL: InjectionToken<string> = new InjectionToken('apiUrl');

export const MY_PERFECTSCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};
