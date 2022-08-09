import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <i nz-icon nzType="caret-down"></i>
  <nz-select>
    <nz-option nzValue="lucy" nzLabel="Lucy"></nz-option>
  </nz-select>
  `,
})
export class AppComponent {}
