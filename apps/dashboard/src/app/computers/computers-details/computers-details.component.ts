
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Computer } from '@ngrx-computers/core-data';

@Component({
  selector: 'ngrx-computers-computers-details',
  templateUrl: './computers-details.component.html',
  styleUrls: ['./computers-details.component.scss']
})
export class ComputersDetailsComponent {
  currentComputer: Computer;
  originalTitle;
  @Input() set computer(value) {
    if (value) this.originalTitle = value.title;
    this.currentComputer = Object.assign({}, value);
  }
  @Input() form;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
