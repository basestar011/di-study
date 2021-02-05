[di-study project]
1. Dependency-Injection.md - Angular의 의존성 주입
- 의존성 객체란 무엇인가
- 의존성 주입 패턴이란?
- 서비스 클래스 의존성 주입 방법
- 인젝터와 프로바이더
- @Injectable() 데코레이터
- 의존성 주입 토큰
- @Optional() 데코레이터

2. Dependency-Providers.md - 의존성 프로바이더
- 프로바이더 객체 리터럴
- 대체 클래스 프로바이더
- aliased 클래스 프로바이더
- value 프로바이더
- 문자열, 함수 등의 의존성 객체 주입법
- InjectionToken 객체 정의 방법
- 팩토리 프로바이더
- 트리 셰이킹이란?
- Angular에서의 트리 셰이킹
- 트리 셰이킹 대상이 될 수 있는 프로바이더

[di-study-in-action project]
1. Dependency-Injection-in-action.md - 실전 의존성 주입
- 중첩된 서비스 의존성  
- 서비스 주입 범위 제한  
- 같은 계층의 컴포넌트 마다 서비스 인스턴스 유지하기  
- Parameter Decorators  
- Parameter Decorator의 종류  
- 커스텀 프로바이더 주입  
- @Self(), @SkipSelf() Decorator  
- 커스텀 Directive 클래스에서 컴포넌트의 DOM 엘리먼트 주입  
- 프로바이더 정의  
- 프로바이더 토큰  
- 상속된 클래스로 의존성 주입  
- forwardRef 순환참조 해결  