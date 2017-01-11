import { NgModule } from '@angular/core';

import { HeroComponent }   from './hero.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [],
    declarations: [
      HeroComponent
    ],
    providers: [],
})
export class HeroModule { }
