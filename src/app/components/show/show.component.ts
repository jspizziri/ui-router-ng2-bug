import {Component} from '@angular/core';
import {UIROUTER_DIRECTIVES} from 'ui-router-ng2';

@Component({
  template: require('./show.pug'),
  directives: [UIROUTER_DIRECTIVES]
})
export class ShowComponent {}
