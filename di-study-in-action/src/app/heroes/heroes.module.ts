import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesBaseComponent } from './unsorted-heroes.component';
import { SortedHeroesComponent } from './sorted-heroes.component';
import { HeroBioComponent } from './bios/hero-bio.component';
import { HeroBiosComponent } from './bios/hero-bios.component';
import { HeroBiosAndContactsComponent } from './hero-bios-and-contacts.component';
import { FormsModule } from '@angular/forms';
import { HeroContactComponent } from './contacts/hero-contact.component';

@NgModule({
  declarations: [
    HeroesBaseComponent,
    SortedHeroesComponent,
    HeroBioComponent,
    HeroBiosComponent,
    HeroContactComponent,
    HeroBiosAndContactsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeroesBaseComponent,
    SortedHeroesComponent,
    HeroBiosComponent,
    HeroBiosAndContactsComponent
  ]
})
export class HeroesModule { }
