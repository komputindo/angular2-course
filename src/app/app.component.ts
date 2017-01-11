import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
    
    <!--<app-book-form></app-book-form>-->
`,
})
export class AppComponent {
  title = 'app works!';
}
