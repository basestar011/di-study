import { Logger } from '../services/logger.service';
import { HeroService } from '../services/hero.service';
import { UserService } from '../services/user.service';
/**
 * 팩토리 프로바이더는 heroServiceProvider와 같이 변수에 할당하여 export 해야
 * 이후에 재사용 가능하다
 * HeroService가 필요한 곳에서 이 변수를 불러서 사용하면 된다.
 */
const heroServiceFactory = (logger: Logger, userService: UserService) => {
    return new HeroService(logger, userService.user.isAuthorized);
};

export let heroServiceProvider = {
    provide: HeroService,
    // useFactory를 사용하면 heroServiceFactory와 같은 팩토리 함수가 사용된다는 것을 의미
    useFactory: heroServiceFactory,
    // 팩토리 함수에 필요한 프로바이더 토큰은 deps 프로퍼티로 지정
    deps: [Logger, UserService]
};
