import { Routes } from '@angular/router';
import { homeComponent } from './home/home.component';
import { previousComponent } from './previousMatches/previous.component';
import { welcomeComponent } from './Welcome/welcome.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: welcomeComponent,
  },
  {
    path: 'welcome',
    component: welcomeComponent,
  },
  { path: 'home', component: homeComponent },
  { path: 'previous', component: previousComponent },
];
