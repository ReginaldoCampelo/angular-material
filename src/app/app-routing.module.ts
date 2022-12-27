import { UserFormComponent } from './user/user-form/user-form.component';
import { TabsComponent } from './tabs/tabs.component';
import { ProgressSpinnerComponentComponent } from './progress-spinner-component/progress-spinner-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonsIconsComponent } from './buttons-icons/buttons-icons.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';
import { DataGridComponent } from './datagrid/datagrid.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  { path: 'buttonIcon', component: ButtonsIconsComponent },
  { path: 'formFieldInput', component: FormFieldInputComponent },
  { path: 'progressSpinner', component: ProgressSpinnerComponentComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'dataGrid', component: DataGridComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-form', component: UserFormComponent },
  { path: 'user-form/:id', component: UserFormComponent },
  { path: '', redirectTo: '/user-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
