import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAgePipe } from './time-age.pipe';



@NgModule({
  declarations: [
    TimeAgePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimeAgePipe
  ]
})
export class PipesModule { }
