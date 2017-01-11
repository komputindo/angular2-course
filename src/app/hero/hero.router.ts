import { RouterModule } from '@angular/router';

import { HeroComponent } from './hero.component';

export const heroRouter = RouterModule.forChild([
    {path: 'hero', component: HeroComponent}
])