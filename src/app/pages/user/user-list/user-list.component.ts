import { Component, OnInit } from '@angular/core';
import { GridHeading, GridResponse } from 'angular-material-data-grid';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  url: string = environment.apiUrl;

  headings: GridHeading[] = [
    { fieldName: 'id', display: 'ID', type: 'number', width: '100px', disableSorting: true, textAlign: 'right' },
    { fieldName: 'first_name', display: 'First Name', type: 'string', width: '120px' },
    { fieldName: 'last_name', display: 'Last Name', type: 'string', width: '120px' },
    { fieldName: 'email', display: 'Email', type: 'string', width: '180px' },
    { fieldName: 'cpf', display: 'CPF', type: 'string', width: '120px' },
    { fieldName: 'cnh', display: 'CNH', type: 'string', width: '120px' },
    { fieldName: 'birthDay', display: 'Date Of Birth', type: 'date', width: '150px' },
    { fieldName: 'phone', display: 'Phone', type: 'string', width: '120px' },
    { fieldName: 'address', display: 'Address', type: 'string', width: '120px' },
    { fieldName: 'city', display: 'City', type: 'string', width: '120px' },
    { fieldName: 'state', display: 'State', type: 'string', width: '120px' },
    { fieldName: 'zipCode', display: 'Zip Code', type: 'string', width: '120px' },
    { fieldName: 'country', display: 'Contry', type: 'string', width: '120px' },
    {
      fieldName: 'gender', display: 'Gender', type: 'string', width: '100px',
      filterType: 'multi-select',
      other: {
        selectionMode: 'single',
        source: 'internal',
        optionsObject: [
          { text: 'Female', value: 'FEMALE' },
          { text: 'Male', value: 'MALE' }
        ]
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  responseReceived(response: GridResponse): void {
    console.log(response); // If necessary manipulate the data or use data in the parent component
  }
}
