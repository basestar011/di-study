import { Injectable, Optional } from '@angular/core';
import { Logger } from '../logger.service';
import { HEROES } from './mock-heroes';

/**
 * 서비스의 인스턴스를 생성 및 클래스에 주입하는 역할을 Injector가 한다.
 * 프로바이더는 다음과 같이 등록할 수 있다.
 * 1. 서비스의 클래스에서 @injectable() 데코레이터로 직접 등록 - providedIn
 * 2. NgModule의 @NgModule() 데코레이터에 등록 - providers
 * 3. 컴포넌트의 @Component() 데코레이터에 등록 - providers
 * ----
 * 서비스는 인젝터의 범위 안에서 싱글턴으로 존재
 * 애플리케이션에 존재하는 최상위 인젝터는 항상 하나.
 * Angular가 제공하는 의존성 주입 시스템은 인젝터를 '계층 구조'로 구성
 * @Component에 providers가 지정되어 있다면 컴포넌트를 생성할 때마다 인젝터를 생성
 * 자식 모듈이나 컴포넌트에 생성된 인젝터는 모두 독립적으로 작동한다.
 * ----
 * 부모 계층의 인젝터에 등록된 서비스는 자식 계층에 자유롭게 주입 가능.
 */
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // 서비스에도 의존성 주입.
  constructor(
    private logger: Logger,
    private isAuthorized: boolean) { }
  /*
  -- 의존성 객체를 생략하려면 @Optional() 데코레이터 사용
  -- 이 데코레이터 사용 시 주입 인스턴스가 null인 경우 고려해야함
  constructor(@Optional() private logger?: Logger) {
    this.logger && this.logger.log(someMessage);
  }
  */

  // 기존에 목 데이터를 반환하던 로직을 클래스코드에서 getHeroes메소드가 제공하도록 한다.
  public getHeroes() {
    const auth = this.isAuthorized ? 'authorized' : 'unauthorized';
    this.logger.log(`Getting heroes for ${auth} user....`);
    return HEROES.filter(hero => this.isAuthorized || !hero.isSecret);
  }
}
