import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponentComponent } from './sample-component/sample-component.component';
import { SampleComponentTwoComponent } from './sample-component-two/sample-component-two.component';



@NgModule({
  declarations: [
    SampleComponentComponent,
    SampleComponentTwoComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    SampleComponentComponent,
    SampleComponentTwoComponent
  ]
})
export class SampleModuleModule { }
