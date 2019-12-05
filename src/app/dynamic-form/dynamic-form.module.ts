import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatButtonModule,
} from '@angular/material';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { DynamicFieldDirective } from './dynamic-field.directive';
import { FormGroupComponent } from './form-group/form-group.component';

@NgModule({
  declarations: [
    DynamicFormComponent,
    FormInputComponent,
    FormSelectComponent,
    DynamicFieldDirective,
    FormGroupComponent,
  ],
  exports: [DynamicFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatButtonModule,
  ],
  entryComponents: [
    FormInputComponent,
    FormSelectComponent,
    FormGroupComponent,
  ],
})
export class DynamicFormModule {}
