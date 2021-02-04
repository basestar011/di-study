import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageComponent } from './storage/storage.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    StorageComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    StorageComponent,
    HighlightDirective
  ]
})
export class SharedModule { }
