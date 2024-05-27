import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {HttpClientModule, provideHttpClient, withInterceptors} from "@angular/common/http";
import {httpInterceptor} from "./http.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), HttpClientModule,provideHttpClient(withInterceptors([httpInterceptor])),]
};
