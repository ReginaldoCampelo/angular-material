import { TabsComponent } from './tabs/tabs.component';
import { ProgressSpinnerComponentComponent } from './progress-spinner-component/progress-spinner-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonsIconsComponent } from './buttons-icons/buttons-icons.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';
import { DataGridComponent } from './datagrid/datagrid.component';

const routes: Routes = [
  { path: 'buttonIcon', component: ButtonsIconsComponent },
  { path: 'formFieldInput', component: FormFieldInputComponent },
  { path: 'progressSpinner', component: ProgressSpinnerComponentComponent},
  { path: 'tabs', component: TabsComponent },
  { path: 'dataGrid', component: DataGridComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
