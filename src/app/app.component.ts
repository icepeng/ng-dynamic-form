import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  config = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
    },
    {
      type: 'select',
      label: 'Favourite food',
      name: 'food',
      options: ['Pizza', 'Chicken', 'Coffee'],
    },
    {
      type: 'group',
      label: 'Address',
      name: 'address',
      children: [
        {
          type: 'input',
          label: 'Address 1',
          name: 'address1',
        },
        {
          type: 'input',
          label: 'Address 2',
          name: 'address2',
        },
      ],
    },
  ];

  onSubmit(value) {
    console.log(value);
  }
}
