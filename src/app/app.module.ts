import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { ButtonsIconsComponent } from './buttons-icons/buttons-icons.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerComponentComponent } from './progress-spinner-component/progress-spinner-component.component';
import { TabsComponent } from './tabs/tabs.component';
import { DataGridComponent } from './datagrid/datagrid.component';
import { UserListComponent } from './user/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsIconsComponent,
    FormFieldInputComponent,
    ProgressSpinnerComponentComponent,
    TabsComponent,
    DataGridComponent,
    UserListComponent
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
