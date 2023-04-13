import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupUpPageComponent } from './components/signup-up-page/signup-up-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomeComponent } from './components/home/home.component';
import { EmployerComponent } from './components/employer/employer.component';
import { CandidateDetailsComponent } from './components/candidate-details/candidate-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupUpPageComponent,
    LoginPageComponent,
    HomeComponent,
    EmployerComponent,
    CandidateDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
