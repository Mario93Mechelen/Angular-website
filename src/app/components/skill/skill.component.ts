import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TSkill } from '../..//types';

@Component({
  selector: 'app-single-skill',
  template: `
  <div class="skill {{!skill.imageUrl ? 'contact' : null}}">
  <div class="image-wrapper" *ngIf="skill.imageUrl">
      <img src="{{skill.imageUrl}}" alt="{{skill.imageAlt}}">
  </div>
  <div class="description-wrapper">
      <h2>{{skill.title}}</h2>
      <p>{{skill.description}}</p>
      <app-button *ngIf="skill.buttonLink" [buttonLink]="skill.buttonLink" [buttonText]="skill.buttonText" [buttonShouldReturnValue]="!skill.shouldNotReturnValue" (handleClick)="getHref($event)"></app-button>
  </div>
</div>
  `,
  styleUrls: ['./skill.component.sass'],

})
export class SkillComponent {
  @Input() skill: TSkill;
  @Output() returnSkill: EventEmitter<string> = new EventEmitter();

  public getHref = (href) => {
    this.returnSkill.emit(href.substring(href.indexOf('#')+1));
  }
}