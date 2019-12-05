import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GroupConfig } from '../config.interface';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent implements OnInit {
  @Input() group: FormGroup;
  @Input() config: GroupConfig;

  childGroup: FormGroup;

  constructor() {}

  ngOnInit() {
    this.childGroup = this.group.get(this.config.name) as FormGroup;
  }
}
