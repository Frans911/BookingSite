import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { HomeComponent } from './components/home/home.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { routes } from './app.routes.module'

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
