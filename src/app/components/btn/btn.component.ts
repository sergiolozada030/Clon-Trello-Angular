import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
})
export class BtnComponent implements OnInit {
  @Input() buttonType: 'submit' | 'reset' | 'button' = 'button';
  @Input() color: string = 'success';

  constructor() {}

  ngOnInit(): void {}

  get colors() {
    return {
      'bg-success': this.color === 'success',
      'hover:bg-green-600': this.color === 'success',
    };
  }
}
