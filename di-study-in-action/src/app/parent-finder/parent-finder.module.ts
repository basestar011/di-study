import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {
  AlexComponent,
  AliceComponent,
  BarryComponent,
  BethComponent,
  BobComponent,
  CarolComponent,
  CathyComponent,
  ChrisComponent,
  CraigComponent,
  ParentFinderComponent
} from './parent-finder.component';

@NgModule({
  declarations: [
    ParentFinderComponent,
    CarolComponent,
    ChrisComponent,
    CraigComponent,
    BarryComponent,
    BobComponent,
    BethComponent,
    AlexComponent,
    AliceComponent,
    CathyComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ParentFinderComponent
  ]
})
export class ParentFinderModule { }
