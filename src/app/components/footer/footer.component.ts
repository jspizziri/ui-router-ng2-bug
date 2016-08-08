import {Component} from '@angular/core';
import {UIROUTER_DIRECTIVES} from 'ui-router-ng2';

@Component({
  selector: 'footer#footer',
  template: require('./footer.pug'),
  directives: [UIROUTER_DIRECTIVES],
  styles: [],
})
export class FooterComponent { }
