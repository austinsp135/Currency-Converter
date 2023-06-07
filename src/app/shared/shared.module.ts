import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterPipe } from '../pipe/converter.pipe';


@NgModule({
  declarations: [
    ConverterPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ConverterPipe
  ]
})
export class SharedModule { }
