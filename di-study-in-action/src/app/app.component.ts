import { Component } from '@angular/core';
import { LoggerService } from './core/services/logger/logger.service';
import { UserContextService } from './core/services/user/user-context.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private userId = 1;

  /**
   * - 중첩된 서비스 의존성 -
   * app component를 생성할 때
   * LoggerService와 UserContextService의 인스턴스를 먼저 생성
   * UserContextService에서 필요한 LoggerService의 인스턴스는 이미 프레임워크가 생성했기 때문에
   * 이전에 만들었던 인스턴스를 다시 활용
   * UserService는 추가로 필요한 의존성이 없기 때문에
   * 프레임워크는 간단하게 new 키워드를 사용해서 UserService의 인스턴스를 생성하고
   * 이 인스턴스를 UserContextService의 생성자에 주입
   */
  constructor(
    logger: LoggerService,
    public userContext: UserContextService
  ) {
    userContext.loadUser(this.userId);
    logger.logInfo('AppComponent initailized');
  }
}
