import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { SharedModule } from './shared/shared.module';
import { ParentFinderComponent } from './parent-finder/parent-finder.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentFinderComponent
  ],
  imports: [
    AppRoutingModule,
    HeroesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
