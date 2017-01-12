import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {BookFormModule} from "./book-form/book-form.module";
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header.component';
import {routing} from "./routing";
import {bookRouter} from "./book-form/book-form.router";
import {heroRouter} from "./hero/hero.router";
import {HeroModule} from "./hero/hero.module";
import {reactiveRouter} from "./reactive/reactive.router";
import {ReactiveModule} from "./reactive/reactive.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,

    bookRouter,
    BookFormModule,

    heroRouter,
    HeroModule,

    reactiveRouter,
    ReactiveModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
