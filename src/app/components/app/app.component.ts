import {Component, ViewEncapsulation} from '@angular/core';
import {UiView} from 'ui-router-ng2';

import '../../config/rxjs';

import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app',
  directives: [UiView, FooterComponent, HeaderComponent],
  encapsulation: ViewEncapsulation.None,
  template: require('./app.pug'),
  styles: [
    require('../../../index.scss')
  ],
})
export class AppComponent { }
