/// <reference path="../typings/index.d.ts"/>

import {Injectable} from '@angular/core';
import {UIRouter} from 'ui-router-ng2/router';
import {IndexComponent} from './app/components/index/index.component';
import {ShowComponent} from './app/components/show/show.component';

const INITIAL_STATES: any[] = [
  {name: 'index', url: '/index', component: IndexComponent},
  {name: 'show', url: '/index/:id', component: ShowComponent},
];

@Injectable()
export class MyUIRouterConfig {
  configure(uiRouter: UIRouter) {
    uiRouter.urlRouterProvider.otherwise(() => uiRouter.stateService.go('index', null, null));
    uiRouter.stateRegistry.root();
    INITIAL_STATES.forEach(state => uiRouter.stateRegistry.register(state));
  }
}
