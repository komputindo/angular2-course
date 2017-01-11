import {NgModule} from "@angular/core";
import {BookFormComponent} from "./book-form.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
@NgModule({
  declarations: [
    BookFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BookFormComponent
  ],
  providers:[],
  bootstrap:[]
})

export class BookFormModule {

}

