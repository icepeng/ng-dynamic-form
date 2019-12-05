import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormConfig } from '../config.interface';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() config: FormConfig[] = [];
  @Output() submitted = new EventEmitter();

  form: FormGroup;

  constructor() {}

  ngOnInit() {
    this.form = this.createGroup(this.config);
  }

  createGroup(config: FormConfig[]) {
    const group = new FormGroup({});
    for (const control of config) {
      if (control.type === 'group') {
        group.addControl(control.name, this.createGroup(control.children));
      }
      group.addControl(control.name, new FormControl());
    }
    return group;
  }
}
