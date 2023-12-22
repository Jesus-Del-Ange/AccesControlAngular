import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent {

  public sidebarItems =[
    {label:'Residentes',icon:'person', url:'./residents'},
    {label:'Administradores',icon:'supervisor_account', url:'./administrators'},
    {label:'Guardias',icon:'security', url:'./guards'}
  ]

}
