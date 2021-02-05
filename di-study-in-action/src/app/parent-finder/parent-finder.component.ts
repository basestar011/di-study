import { Component, forwardRef, OnInit, Optional, SkipSelf } from '@angular/core';

// base class
export abstract class Base {
  name = 'Count Basie';
}

// Marker class - interface로 사용
export abstract class Parent {
  name: string;
}

// 현재 컴포넌트를 프로바이더 형태로 반환하는 헬퍼 메소드
// 두번째 인자가 생략되면 'parentType'은 'Parent'로 지정됨.
export function provideParent(component: any, parentType?: any) {
  return {
    provide: parentType || Parent,
    useExisting: forwardRef(() => component)
  };
}

// 항상 Parent 컴포넌트가 제공될 때의 버전
export function provideTheParent(component: any) {
  return { provide: Parent, useExisting: forwardRef(() => component) };
}

// child component template
const templateC = `
<div class="c">
  <h3>{{name}}</h3>
  <p>My parent is {{parent?.name}}</p>
</div>`;

@Component({
  selector: 'app-carol',
  template: templateC
})
export class CarolComponent {
  name = 'Carol';
  constructor( @Optional() public parent?: Parent) { }
}

@Component({
  selector: 'app-chris',
  template: templateC
})
export class ChrisComponent {
  name = 'Chris';
  constructor( @Optional() public parent?: Parent ) { }
}

//////  Craig ///////////
/**
 * base class로 parent를 주입할 수 없다
 */
@Component({
  selector: 'app-craig',
  template: `
  <div class="c">
    <h3>Craig</h3>
    {{alex ? 'Found' : 'Did not find'}} Alex via the base class.
  </div>`
})
export class CraigComponent {
  constructor( @Optional() public alex?: Base ) { }
}

//////// B - Parent /////////
const templateB = `
  <div class="b">
    <div>
      <h3>{{name}}</h3>
      <p>My parent is {{parent?.name}}</p>
    </div>
    <app-carol></app-carol>
    <app-chris></app-chris>
  </div>`;

@Component({
  selector: 'app-barry',
  template: templateB,
  providers: [{ provide: Parent, useExisting: forwardRef(() => BarryComponent) }]
})
export class BarryComponent implements Parent {
  name = 'Barry';
  constructor( @SkipSelf() @Optional() public parent?: Parent ) { }
}

@Component({
  selector: 'app-bob',
  template: templateB,
  providers: [ provideParent(BobComponent) ]
})
export class BobComponent implements Parent {
  name = 'Bob';
  constructor( @SkipSelf() @Optional() public parent?: Parent ) { }
}

@Component({
  selector: 'app-beth',
  template: templateB,
  providers: [ provideParent(BethComponent, Base) ]
})
export class BethComponent implements Parent {
  name = 'Beth';
  constructor( @SkipSelf() @Optional() public parent?: Parent ) { }
}

///////// A - Grandparent //////
@Component({
  selector: 'app-alex',
  template: `
    <div class="a">
      <h3>{{name}}</h3>
      <app-cathy></app-cathy>
      <app-craig></app-craig>
      <app-carol></app-carol>
    </div>`,
  providers: [{ provide: Parent, useExisting: forwardRef(() => AlexComponent) }],
})
// TODO: Add `... implements Parent` to class signature
export class AlexComponent extends Base {
  name = 'Alex';
}

@Component({
  selector: 'app-alice',
  template: `
    <div class="a">
      <h3>{{name}}</h3>
      <app-barry></app-barry>
      <app-beth></app-beth>
      <app-bob></app-bob>
      <app-carol></app-carol>
    </div> `,
  providers:  [ provideParent(AliceComponent) ]
})
export class AliceComponent implements Parent {
  name = 'Alice';
}

//////  Cathy ///////////
/**
 * component 타입으로 parent를 주입할 수 있음.
 */
@Component({
  selector: 'app-cathy',
  template: `
  <div class="c">
    <h3>Cathy</h3>
    {{alex ? 'Found' : 'Did not find'}} Alex via the component class.<br>
  </div>`
})
export class CathyComponent {
  constructor( @Optional() public alex?: AlexComponent ) { }
}

@Component({
  selector: 'app-parent-finder',
  templateUrl: './parent-finder.component.html',
  styleUrls: ['./parent-finder.component.css']
})
export class ParentFinderComponent { }
