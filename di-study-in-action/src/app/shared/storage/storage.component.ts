import { Component, Self, SkipSelf } from '@angular/core';
import { BrowserStorageService, BROWSER_STORAGE } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  providers: [
    BrowserStorageService,
    {
      provide: BROWSER_STORAGE,
      useFactory: () => sessionStorage
    }
  ]
})
export class StorageComponent {

  constructor(
    @Self() private sessionStorageService: BrowserStorageService,
    @SkipSelf() private localStorageService: BrowserStorageService
  ) { }

  setSession() {
    this.sessionStorageService.set('hero', 'Dr Nice - Session');
  }

  setLocal() {
    this.localStorageService.set('hero', 'Dr Nice - Local');
  }

}
