/**
 * 프로바이더 등록 방법
 * 1) 클래스의 프로바이더 사용
 * 2) Logger와 형태가 같은 객체를 프로바이더로 등록
 * 3) 팩토리 함수를 실행하고 받은 반환값을 프로바이더로 등록
 * ----
 * ----
 * - Provider 객체 리터럴 -
 * 1)번 방법으로 등록할 때 사용하는 문법
 * ( providers: [ Logger ] )는 아래를 짧게 줄인 것.
 * [{provide: Logger, useClass: Logger }]
 * provide는 토큰을 지정
 * 클래스를 직접 인젝터에 등록하는 경우 useClass 사용
 * 상황에 따라
 * - useExisting, useValue, useFactory 을 사용
 * ----
 * ----
 * - 대체 클래스 프로바이더 -
 * 인젝터가 Logger 토큰으로 의존성 객체를 요청받았을 때
 * 다른 클래스를 등록하여 제공하도록 할 수 있다.
 * [{ provide: Logger, useClass: BetterLogger }]
 */

/*
@Injectable()
export class EvenBetterLogger extends Logger {
    constructor(private userService: UserService) { super(); }

    log(message: string) {
        const name = this.userService.user.name;
        super.log(`Message to ${name}: ${message}`);
    }
}
*/

/**
 * 인젝터에 EvenBetterLogger와 UserService의 프로바이더를 모두 등록할때
 * 아래와 같이 부모 모듈 혹은 컴포넌트의 providers 에 사용할 수 있다.
 * [ UserService, { provide: Logger, useClass: EvenBetterLogger }]
 * ----
 * ----
 * - 별칭(aliased) 클래스 프로바이더 -
 * 이전에 사용하던 컴포넌트에 OldLogger 클래스가 주입되고있다.
 * 같은 인터페이스 형태로 NewLogger를 만들었는데 이 코드를 수정할 수 없다.
 * OldLogger가 주입 요청받았을 때 NewLogger를 주입하려고 할 때 사용
 * - NewLogger 인스턴스를 두개로 나누는 방식
 * [ NewLogger, { provide: OldLogger, useClass: NewLogger }]
 * - NewLogger 인스턴스를 하나로 유지
 * [ NewLogger, { provide: OldLogger, useExisting: NewLogger }]
 * ----
 * ----
 * - 값(value) 프로바이더 -
 * 클래스 인스턴스 대신 미리 만든 객체를 제공하는게 더 간단할 때
 * 클래스가 아닌 객체를 프로바이더로 등록
 */

/*
- Logger 서비스와 모양이 같은 객체
function silentLoggerFn() {}

export const SilentLogger = {
    logs: ['Silent logger says "Shhhhh!". Provided via "useValue"'],
    log: silentLoggerFn
};
*/

/**
 * 이 객체를 등록할 때는 useValue 사용
 * [{ provide: Logger, useValue: SilentLogger }]
 * ----
 * ----
 * - 클래스가 아닌 의존성 객체 -
 * 문자열이나 함수, 객체도 의존성으로 주입될 수 있다.
 * ex) 애플리케이션 제목, 웹 API 엔드포인트 주소
 * 이 때 의존성 객체 리터럴로 정의
 */

/*
export const HERO_DI_CONFIG: AppConfig = {
    apiEndpoint: 'api.heroes.com',
    title: 'Dependency Injection'
};

인터페이스는 프로바이더 토큰으로 사용할 수 없습니다.
[{ provide: AppConfig, useValue: HERO_DI_CONFIG })]

인자의 타입으로 인터페이스를 지정하면 의존성 주입이 동작하지 않습니다.
constructor(private config: AppConfig){ }
*/

/**
 * 클래스가 아닌 의존성 객체는 InjectionToken 객체를 정의하여 등록할 수 있다.
 */

/*
import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
*/

/**
 * 정의한 InjectionToken을 인젝터에 등록
 * providers: [{ provide: APP_CONFIG, useValue: HERO_DI_CONFIG }]
 * 등록한 의존성 토큰은 생성자에서 @Inject() 인자 데코레이터 사용하여 주입
 */

/*
constructor(@Inject(APP_CONFIG) config: AppConfig) {
    this.title = config.title;
}
*/

/**
 * ----
 * ----
 * - 팩토리 프로바이더 -
 * 의존성 객체를 동적으로 생성해야 하는 경우 사용
 * 의존성 주입을 제공하지 않는 서드 파티 라이브러리에 의존성 주입 시스템을 적용하는 용도로도 사용 가능
 * hero.service.provide.ts 파일에 예제 작성
 * ----
 * ----
 * 의존성 토큰 상수
 * - 다양한 시스템 환경에서 상황에 맞게 커스터마이징 할 때 사용
 * - Angular 프레임워크의 부트스트랩 과정과 초기화 과정을 조정할 수 있다.
 * - 콜백 함수를 연결하여 특정 환경에서 로직 실행 가능
 * 1) PLATFORM_INITIALIZER: 플랫폼이 초기화된 이후에 실행될 함수를 지정합니다.
 * 2) APP_BOOTSTRAP_LISTENER: 컴포넌트가 부트스트랩된 이후에 실행될 함수를 지정합니다.
 *                            이 함수는 부트스트랩된 컴포넌트의 ComponentRef 인스턴스를 인자로 받습니다.
 * 3) APP_INITIALIZER: 애플리케이션이 초기화된 이후에 실행될 함수를 지정합니다.
 *                     이때 실행할 함수는 Promise를 반환하도록 정의할 수도 있는데,
 *                     이 프로미스는 모두 애플리케이션이 부트스트랩되기 전에 종료되어야 합니다.
 *                     부트스트랩되기 전에 종료되지 않은 프로미스가 있다면 애플리케이션이 부트스트랩되지 않습니다.
 * 프로바이더 객체에 multi: true 옵션을 사용하여 해당 토큰에 여러 함수를 같이 등록할 수 있다.
 */

/*
 export const APP_TOKENS = [
 { provide: PLATFORM_INITIALIZER, useFactory: platformInitialized, multi: true },
 { provide: APP_INITIALIZER, useFactory: delayBootstrapping, multi: true },
 { provide: APP_BOOTSTRAP_LISTENER, useFactory: appBootstrapped, multi: true },
];

다중 프로바이더를 ReadOnlyArray 타입으로 지정하면 이 항목이 변경되는 코드를 감지하고 에러를 발생시킴
constructor(@Inject(MULTI_PROVIDER) multiProvider: ReadonlyArray<MultiProvider>) {}
*/

/**
 * 트리 셰이킹
 * 애플리케이션에 사용되지 않는 코드를 최종 번들링 결과물에 포함시키지 않는 기능
 * Angular에는 트리 셰이킹될 수 있도록 등록된 프로바이더에만 적용할 수 있다.
 * ----
 * 트리 셰이킹 대상이 되도록 프로바이더 등록
 * -> 서비스 프로바이더를 서비스에 @Injectable() 데코레이터로 직접 등록
 * tree-shaking/service.0.ts 예제
 */
