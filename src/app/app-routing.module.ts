import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { headerComponent } from './header/header.component';
import { homeComponent } from './home/home.component';
import { welcomeComponent } from './Welcome/welcome.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: homeComponent },
      { path: '', component: welcomeComponent },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
