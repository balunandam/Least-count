import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { headerComponent } from './header/header.component';
import { homeComponent } from './home/home.component';
import { welcomeComponent } from './Welcome/welcome.component';
import { previousComponent } from './previousMatches/previous.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: homeComponent },
      { path: '', component: welcomeComponent },
      { path: 'previous', component: previousComponent },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
