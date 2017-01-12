import {RouterModule} from "@angular/router";
import {ReactiveComponent} from "./reactive.component";

export const reactiveRouter = RouterModule.forChild([
  {path: 'reactive', component: ReactiveComponent}
])
