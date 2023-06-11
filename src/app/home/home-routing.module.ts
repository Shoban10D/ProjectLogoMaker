import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoHomeComponent } from './logo-home/logo-home.component';

const routes: Routes = [
  {path:'logo-home',component:LogoHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
