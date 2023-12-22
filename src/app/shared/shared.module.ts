import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent
  ]

})
export class SharedModule { }
