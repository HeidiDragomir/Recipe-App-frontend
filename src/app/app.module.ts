import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthconfigInterceptor } from './shared/authconfig.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { RecipeModule } from './recipe/recipe.module';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecipeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthconfigInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
