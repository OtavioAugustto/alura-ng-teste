import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widiget.component.html',
  styleUrls: ['./like-widiget.component.scss'],
})
export class LikeWidgetComponent {
  @Output() public liked = new EventEmitter();
  @Input() public likes = 0;
  @Input() public id = null;
}
