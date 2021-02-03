import { Component } from '@angular/core';
import { heroServiceProvider } from '../core/provider/hero.service.provider';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  // 직접 컴포넌트의 프로바이더로 등록
  providers: [ heroServiceProvider ]
})
export class HeroesComponent { }
