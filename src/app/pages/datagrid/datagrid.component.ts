import { Component, OnInit } from '@angular/core';
import { GridHeading, GridResponse } from 'angular-material-data-grid';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DataGridComponent implements OnInit {

  url = 'https://angular-grid.onrender.com/getUsers'; // add your POST endpoint here later

  headings: GridHeading[] = [
    {fieldName: 'id', display: 'ID', type: 'number', width: '100px', disableSorting: true, textAlign: 'right'},
    {fieldName: 'first_name', display: 'First Name', type: 'string', width: '120px'},
    {fieldName: 'email', display: 'Email', type: 'string', width: '180px'},
    {fieldName: 'gender', display: 'Gender', type: 'string', width: '100px',
      filterType: 'multi-select',
      other: {
        selectionMode: 'single',
        source: 'internal',
        optionsObject: [
          {text : 'Female', value: 'FEMALE'},
          {text : 'Male', value: 'MALE'}
        ]
      }
    },
    {fieldName: 'date_of_birth', display: 'Date Of Birth', type: 'date', width: '150px'}
  ];

  constructor() { }

  responseReceived(response: GridResponse): void {
    console.log(response); // If necessary manipulate the data or use data in the parent component
  }

  ngOnInit(): void {
  }

}
