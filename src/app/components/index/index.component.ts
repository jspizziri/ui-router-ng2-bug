import {Component} from '@angular/core';
import {UIROUTER_DIRECTIVES} from 'ui-router-ng2';

@Component({
  template: require('./index.pug'),
  directives: [UIROUTER_DIRECTIVES]
})
export class IndexComponent {}
