import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { LogoHomeComponent } from './logo-home/logo-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PreviewLogoComponent } from './preview-logo/preview-logo.component';
@NgModule({
  declarations: [
    LogoHomeComponent,
    PreviewLogoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HomeRoutingModule,
  ],
  
})
export class HomeModule { }
