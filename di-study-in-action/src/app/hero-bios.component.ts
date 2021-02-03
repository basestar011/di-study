import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { LoggerService } from './logger.service';

@Component({
    selector: 'app-hero-bios',
    templateUrl: './hero-bios.component.html',
    providers: [HeroService]
  })
  export class HeroBiosComponent {
    constructor(logger: LoggerService) {
      logger.logInfo('Creating HeroBiosComponent');
    }
  }

@Component({
    selector: 'app-hero-bios-and-contacts',
    templateUrl: './hero-bios-and-contacts.component.html',
    providers: [HeroService]
})
export class HeroBiosAndContactsComponent {
    constructor(logger: LoggerService) {
        logger.logInfo('Creating HeroBiosAndContactsComponent');
    }
}