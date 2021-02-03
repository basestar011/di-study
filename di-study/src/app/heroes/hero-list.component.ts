import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent {
    heroes: Hero[];
    /**
     * 의존성 객체는 어떤 클래스가 동작하기 위해 필요한 서비스나 객체를 의미한다.
     * 의존성 주입 패턴은 이 의존성 객체를 직접 생성하지 않고 외부 어딘가에서 받아오도록 요청하는 패턴
     * Angular에서는 필요한 의존성을 프레임워크가 생성해서 전달한다.
     */

    // 컴포넌트에서 new 키워드로 HeroService 인스턴스를 직접 생성하는것이 아닌
    // 생성자로 HeroService를 주입하도록 요청하는 코드
    constructor(heroService: HeroService) {
        this.heroes = heroService.getHeroes();
    }
}
