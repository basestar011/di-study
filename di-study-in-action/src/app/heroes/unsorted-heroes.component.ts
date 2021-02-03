import { Component, OnInit } from '@angular/core';
import { Hero } from '../core/models/hero';
import { HeroService } from '../core/services/hero.service';

@Component({
    selector: 'app-unsorted-heroes',
    templateUrl: './unsorted-heroes.component.html',
    // 서로다른 HeroService 인스턴스 생성
    providers: [ HeroService ]
})
export class HeroesBaseComponent implements OnInit {
    constructor(private heroService: HeroService) { }

    heroes: Array<Hero>;

    ngOnInit() {
        this.heroes = this.heroService.getAllHeroes();
        this.afterGetHeroes();
    }

    // 히어로 목록을 처리하는 로직은 자식 클래스에서 오버라이드합니다.
    protected afterGetHeroes() {}
}
