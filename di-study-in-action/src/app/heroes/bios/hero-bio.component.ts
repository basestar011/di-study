import { Component, Input, OnInit } from '@angular/core';

import { HeroCacheService } from '../../core/services/hero-cache.service';

@Component({
  selector: 'app-hero-bio',
  templateUrl: './hero-bio.component.html',
  providers: [HeroCacheService]
})

export class HeroBioComponent implements OnInit  {
  @Input() heroId: number;

  constructor(private heroCache: HeroCacheService) { }

  ngOnInit() {
    this.heroCache.fetchCachedHero(this.heroId);
  }

  get hero() {
    return this.heroCache.hero;
  }
}
