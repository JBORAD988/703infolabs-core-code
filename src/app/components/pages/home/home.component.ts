import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-herosection></app-herosection>
  <app-about></app-about>
  <app-development-process></app-development-process>
  <app-technologies></app-technologies>
  <app-projects></app-projects>
  <app-services></app-services>

  `,
  styles: [` `]
})
export class HomeComponent {

}
