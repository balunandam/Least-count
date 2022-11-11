import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { headerComponent } from './header/header.component';
import { homeComponent } from './home/home.component';

@NgModule({
  imports: [RouterModule.forRoot([{ path: '', component: homeComponent }])],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
