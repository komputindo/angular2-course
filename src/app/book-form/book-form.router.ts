import {RouterModule} from "@angular/router";
import {BookFormComponent} from "./book-form.component";

export const bookRouter = RouterModule.forChild([
  {path: 'form', component: BookFormComponent}
])
