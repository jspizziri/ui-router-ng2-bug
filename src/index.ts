/// <reference path="../typings/index.d.ts"/>

import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/dist/zone';

// angular dependencies
import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {LocationStrategy, PathLocationStrategy, PlatformLocation} from '@angular/common';
import {BrowserPlatformLocation} from '@angular/platform-browser';

// other dependencies
import 'bootstrap-loader';
import {trace, UIRouterConfig, UIROUTER_PROVIDERS, Category} from 'ui-router-ng2';
import {AuthHttp, AuthConfig} from 'angular2-jwt';

trace.enable(Category.TRANSITION, Category.VIEWCONFIG);

// internal dependencies
import './index.scss';
import {MyUIRouterConfig} from './routes';
import {AppComponent} from './app/components/app/app.component';

declare var process: any;
if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  { provide: LocationStrategy, useClass: PathLocationStrategy },
  { provide: PlatformLocation, useClass: BrowserPlatformLocation },

  ...UIROUTER_PROVIDERS,
  ...HTTP_PROVIDERS,

  {
    provide: AuthHttp,
    useFactory: (http) => {
      return new AuthHttp(new AuthConfig({
        globalHeaders: [{'Content-Type': 'application/json'}],
        noJwtError: false,
        noTokenScheme: false
      }), http);
    },
    deps: [Http]
  },
  { provide: UIRouterConfig, useClass: MyUIRouterConfig }
]);
