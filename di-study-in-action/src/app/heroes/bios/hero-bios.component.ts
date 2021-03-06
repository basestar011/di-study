import { Component } from '@angular/core';
import { HeroService } from '../../core/services/hero/hero.service';
import { LoggerService } from '../../core/services/logger/logger.service';

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
