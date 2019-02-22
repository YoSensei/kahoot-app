import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import {AuthFormComponent} from "./components/auth/auth-form/auth-form.component";
import {UserService} from "./components/user/user.service";
import {MenuComponent} from "./components/menu/menu.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthenticationService} from "./components/auth/authentication.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ProfileService} from "./services/profile/profile.service";
import {AuthInterceptorService} from "./services/authentication/auth-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    MenuComponent,
    HomeComponent,
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    UserService,
    AuthenticationService,
    ProfileService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
