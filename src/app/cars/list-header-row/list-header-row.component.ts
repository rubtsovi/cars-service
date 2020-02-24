import { Component } from '@angular/core';

@Component({
  selector: 'cs-list-header-row',
  template: `
    <div class="d-none d-xl-flex row font-weight-bold align-items-end py-2 border-top border-bottom mx-0 bg-white">
      <div class="col-2 pl-3">Model</div>
      <div class="col-1">Nr. rej.</div>
      <div class="col-2">Data dostarczenia</div>
      <div class="col-2">Deadline</div>
      <div class="col-2">Właściciel</div>
      <div class="col-2">Cena naprawy</div>
      <div class="col-1">Akcje</div>
    </div>
  `,
  styles: [
      '.row{border-bottom-width: 3px!important;}',
      'div[class^=col-]{padding-left: 5px;padding-right: 5px}'
  ]
})
export class ListHeaderRowComponent {

  constructor() { }

}
