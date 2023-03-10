import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
})
export class BtnComponent implements OnInit {
  @Input() buttonType: 'submit' | 'reset' | 'button' = 'button';

  constructor() {}

  ngOnInit(): void {}
}
