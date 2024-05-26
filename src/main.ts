import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {httpInterceptor} from "./app/http.interceptor";

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withInterceptors([httpInterceptor]))]
})
  .catch((err) => console.error(err));
