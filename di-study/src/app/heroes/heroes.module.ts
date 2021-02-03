import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { HeroListComponent } from './hero-list/hero-list.component';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroesComponent
  ]
})
export class HeroesModule { }
