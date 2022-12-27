import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserFormComponent } from './pages//user/user-form/user-form.component';
import { UserListComponent } from './pages//user/user-list/user-list.component';
import { ButtonsIconsComponent } from './pages/buttons-icons/buttons-icons.component';
import { DataGridComponent } from './pages/datagrid/datagrid.component';
import { FormFieldInputComponent } from './pages/form-field-input/form-field-input.component';
import { ProgressSpinnerComponentComponent } from './pages/progress-spinner-component/progress-spinner-component.component';
import { TabsComponent } from './pages/tabs/tabs.component';

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
