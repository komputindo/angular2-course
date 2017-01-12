import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ReactiveComponent} from "./reactive.component";

@NgModule({
  declarations: [
    ReactiveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveComponent
  ],
  providers:[],
  bootstrap:[]
})

export class ReactiveModule {

}
