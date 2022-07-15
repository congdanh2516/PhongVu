import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-input-form',
  templateUrl: './error-input-form.component.html',
  styleUrls: ['./error-input-form.component.scss']
})
export class ErrorInputFormComponent implements OnInit {

  @Input()errorString : string;
  constructor() { }

  ngOnInit(): void {
  }

}
