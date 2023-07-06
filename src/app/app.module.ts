import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { ButtonsIconsComponent } from './pages/buttons-icons/buttons-icons.component';
import { DataGridComponent } from './pages/datagrid/datagrid.component';
import { FormFieldInputComponent } from './pages/form-field-input/form-field-input.component';
import { ProgressSpinnerComponentComponent } from './pages/progress-spinner-component/progress-spinner-component.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { UserFormComponent } from './pages/user/user-form/user-form.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { MapComponent } from './pages/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsIconsComponent,
    FormFieldInputComponent,
    ProgressSpinnerComponentComponent,
    TabsComponent,
    DataGridComponent,
    UserListComponent,
    UserFormComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
