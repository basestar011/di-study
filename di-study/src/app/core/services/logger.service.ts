import { Injectable } from '@angular/core';

/**
 * @Injectable() 데코레이터는 모든 서비스에 지정해야한다.
 * Angular가 클래스 인스턴스를 생성하면서 생성자에 객체 타입이 지정된 것을 인식하면
 * 이 타입을 기준으로 메타데이터를 검색
 * 의존성 객체를 찾을 때 데코레이터가 사용된 클래스만 대상으로 한다.
 * 따라서 서비스 클래스를 정의할 때 @Injectable() 데코레이터를 반드시 사용해야한다.
 * ----
 * 인젝터에 프로바이더를 등록한다 > 프로바이더와 의존성 주입 토큰을 연결한다
 * 인젝터 내부에 Map( 토큰(map의 key) - 프로바이더(value) )을 관리
 * 이것을 의존성 객체를 찾을 때 사용
 * ----
 * 의존성으로 주입할 클래스의 타입 -> key
 * 의존성으로 주입하는 인스턴스 -> value
 * ----
 * 의존성 객체를 대부분 클래스로 등록하지만 항상 그런것은 아니다.
 * 객체를 의존성으로 등록할 때도 토큰을 사용
 */
@Injectable({
  providedIn: 'root'
})
export class Logger {
  private logs: string[] = []; // 테스트하기 위해 로그를 저장합니다.

  public log(message: string) {
    this.logs.push(message);
    console.log(message);
  }
}
