import { Component } from '@angular/core';

import { HeroService } from './hero.service';
import { HeroesBaseComponent } from './unsorted-heroes.component';

@Component({
    selector: 'app-sorted-heroes',
    templateUrl: './sorted-heroes.component.html',
    // 서로다른 HeroService 인스턴스 생성
    providers: [HeroService]
})
export class SortedHeroesComponent extends HeroesBaseComponent {
    constructor(heroService: HeroService) {
        super(heroService);
    }

    protected afterGetHeroes() {
        this.heroes = this.heroes.sort((h1, h2) => {
            return h1.name < h2.name ? -1 : (h1.name > h2.name ? 1 : 0);
        });
    }
}
