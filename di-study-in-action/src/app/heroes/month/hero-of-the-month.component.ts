import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { Hero } from 'src/app/core/models/hero';
import { runnersUpFactory, RUNNERS_UP } from 'src/app/core/providers/factories/runners-up';
import { HeroService } from 'src/app/core/services/hero/hero.service';
import { LoggerService } from 'src/app/core/services/logger/logger.service';
import { MinimalLogger } from 'src/app/core/services/logger/minimal-logger.service';

export const TITLE = new InjectionToken<string>('title');

const someHero = new Hero(42, 'Magma', 'Had a great month!', '555-555-5555');

@Component({
  selector: 'app-hero-of-the-month',
  templateUrl: './hero-of-the-month.component.html',
  providers: [
    { provide: Hero, useValue: someHero },
    { provide: TITLE, useValue: 'Hero of the Month' },
    { provide: HeroService, useClass: HeroService },
    { provide: LoggerService, useClass: LoggerService },
    { provide: MinimalLogger, useExisting: LoggerService },
    { provide: RUNNERS_UP, useFactory: runnersUpFactory(2), deps: [Hero, HeroService] }
  ]
})
export class HeroOfTheMonthComponent {
  logs: string[] = [];

  constructor(
    logger: MinimalLogger,
    public heroOfTheMonth: Hero,
    @Inject(RUNNERS_UP) public runnersUp: string,
    @Inject(TITLE) public title: string
  ) {
    this.logs = logger.logs;
    logger.logInfo('starting Up');
  }

}
