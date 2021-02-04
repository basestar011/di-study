import { NgModule } from '@angular/core';
import { HeroesBaseComponent } from './unsorted-heroes.component';
import { SortedHeroesComponent } from './sorted-heroes.component';
import { HeroBioComponent } from './bios/hero-bio.component';
import { HeroBiosComponent } from './bios/hero-bios.component';
import { HeroBiosAndContactsComponent } from './hero-bios-and-contacts.component';
import { HeroContactComponent } from './contacts/hero-contact.component';
import { SharedModule } from '../shared/shared.module';
import { HeroOfTheMonthComponent } from './month/hero-of-the-month.component';

@NgModule({
  declarations: [
    HeroesBaseComponent,
    SortedHeroesComponent,
    HeroBioComponent,
    HeroBiosComponent,
    HeroContactComponent,
    HeroBiosAndContactsComponent,
    HeroOfTheMonthComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    HeroesBaseComponent,
    SortedHeroesComponent,
    HeroBiosComponent,
    HeroBiosAndContactsComponent,
    HeroOfTheMonthComponent
  ]
})
export class HeroesModule { }
