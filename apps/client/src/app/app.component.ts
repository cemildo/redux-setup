import { Component } from '@angular/core';
import { AppFacade } from './+state/app.facade';

@Component({
  selector: 'itclub-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  allItems$ = this.appFacede.allApp$;


  constructor(public appFacede: AppFacade) {
    this.appFacede.loadAll();
  }
}
