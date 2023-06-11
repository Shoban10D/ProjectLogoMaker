import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



const materials = [MatButtonModule,MatIconModule,MatInputModule,MatCardModule,
  MatFormFieldModule,MatToolbarModule,MatGridListModule,MatStepperModule,
MatProgressSpinnerModule]



@NgModule({
  declarations: [],
  imports: [materials],
  exports:[materials]
})
export class MaterialModule { }
