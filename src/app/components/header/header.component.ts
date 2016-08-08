import {Component} from '@angular/core';
import {UIROUTER_DIRECTIVES} from 'ui-router-ng2';

@Component({
  selector: 'header',
  template: require('./header.pug'),
  directives: [UIROUTER_DIRECTIVES],
})
export class HeaderComponent { }
