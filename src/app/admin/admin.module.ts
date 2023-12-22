import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ResidentsComponent } from './pages/residents/residents.component';
import { AdministratorsComponent } from './pages/administrators/administrators.component';
import { GuardsComponent } from './pages/guards/guards.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { AdminRegistrationFormComponent } from './pages/admin-registration-form/admin-registration-form.component';
import { ResidentRegistrationFormComponent } from './pages/resident-registration-form/resident-registration-form.component';
import { GuardRegistrationFormComponent } from './pages/guard-registration-form/guard-registration-form.component';
import { ListResidentsComponent } from './pages/list-residents/list-residents.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    HomePageComponent,
    ResidentsComponent,
    AdministratorsComponent,
    GuardsComponent,
    AdminRegistrationFormComponent,
    ResidentRegistrationFormComponent,
    GuardRegistrationFormComponent,
    ListResidentsComponent,
    ConfirmDialogComponent
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule
  ]
})
export class AdminModule { }
